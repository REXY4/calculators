<?php

namespace App\Http\Controllers;
use DateTime;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use MongoDB\BSON\UTCDateTime;

class UsersController extends Controller
{
    public function show()
    {
        $users = User::get();
    
        $durations = [];
        foreach ($users as $user) {
            $logout = $user->logout_time->toDateTime();
            $login = $user->login_time->toDateTime();
            $duration = $logout->diff($login);
            $durations[] = $duration->format('%h jam %i menit %s detik');
        }
    
        return view('welcome', ['users' => $users, 'durations' => $durations]);
    }
    

}
