import { repo } from '../db/dataset';
import { User } from '../entities/user';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { validate } from 'class-validator';
import { ErrorException } from '../exceptions/error-exception';
import { ErrorCode } from '../exceptions/error-code';
import * as bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';

export class UserService {
  async create(data:any) {
    const repositories =  repo.getRepository(User)
    const dto = new CreateUserDto();
    dto.name = data.name;
    dto.email = data.email;
    dto.password = data.password;
    const findUser = await repositories.findOneBy({ email : data.email })
    if (findUser) {
      throw new ErrorException(ErrorCode.Validation, 'email & password already exsit')
    }
    const errors = await validate(dto);
    if (errors.length) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const hash = await bcrypt.hash(data.password, 10);
    const create = await repositories.create({
      name : dto.name,
      email : dto.email,
      password : hash,
      isActive : true,
      login_time: '',
      logout_time: ''
    });
    const save = await repositories.save(create)
    console.log(save);

    return repositories.findOneById(save.id);
  }

  async getAll(){
    const repositories =  repo.getRepository(User);
    const findAll = await repositories.find();
    return findAll;
  }

  async getByOne(option:any){
    const repositories =  repo.getRepository(User);
    const findAll = await repositories.findOneById(option.id);
  }
  async login(option : any) {
    const repositories = repo.getRepository(User);
    const dto = new LoginUserDto();
    dto.email = option.email;
    dto.password = option.password;
    const errors = await validate(dto);
    if (errors.length) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const findUser = await repositories.findOneBy({ email : option.email });
    if (!findUser) {
      throw new ErrorException(ErrorCode.NotFound, 'User not registered')
    }
    const isValidPassword = await bcrypt.compare(option.password, findUser.password)
    if (!isValidPassword) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const token = jwt.sign({  id: findUser.id }, process.env.SECRET_KEY);
    const getTimeLogin = await repositories.update({id : findUser.id}, {login_time : new ObjectId().getTimestamp()});
    if(!getTimeLogin){
      throw new ErrorException(ErrorCode.NotFound, 'Updated TIme Login Fail!')
    }
    const getTime = (await repositories.findOneById(findUser.id)).login_time;
    return {
      token,
      login_time : getTime
    }
  }

  async checkUser(option:any) {
    const repositories = repo.getRepository(User);
    const findUser = await repositories.findOneById(option.id);
    return findUser
  }

  async logout(option:any){
    const repositories = repo.getRepository(User);
    const findUser = await repositories.findOneById(option.id);
    if(!findUser){
      throw new ErrorException(ErrorCode.NotFound, 'User Not Found')
    }
    const updates = await repositories.update({id : findUser.id}, {logout_time : new ObjectId().getTimestamp()})
    if(!updates){
      throw new ErrorException(ErrorCode.NotFound, 'Update data failed')
    }
    return {
      email : findUser.email,
      token : "",
      logout_time : findUser.logout_time
    }
  }

  async deleteData(id:string){
    const repositories = repo.getRepository(User);
    const result = await repositories.delete(id);
    return result
  }
}
