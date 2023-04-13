/* eslint-disable no-useless-escape */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-eval */
/* eslint-disable no-lonely-if */

import { useEffect, useState } from 'react';
import { Col, Row, Container, Button, ToggleButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/home.css';
import { useDispatch, connect } from 'react-redux';
import { ConvertNumberToWord } from '../utils';
import { AlertBasic } from '../components/alerts';

function Home({ modal }) {
  const [display, setDisplay] = useState('');
  const [labelClear, setLabelClear] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const dispatch = useDispatch();
  const radios = [
    { name: 'Number', value: '1' },
    { name: 'Word', value: '2' }
  ];

  const handleClick = async (type, value) => {
    // try {
    // } catch (err) {}
    if (value === '=') {
      const result = eval(display);
      if (!result) {
        dispatch({
          type: 'SHOW_MODAL_ALERT',
          payload: {
            status: true,
            message: 'Input yang anda masukan tidak sesuai!',
            variant: 'danger'
          }
        });
        setTimeout(() => {
          dispatch(
            {
              type: 'SHOW_MODAL_ALERT',
              payload: {
                status: false,
                message: 'Input yang anda masukan tidak sesuai!',
                variant: 'danger'
              }
            },
            1000
          );
        });
      } else {
        setDisplay(result);
      }
    } else if (value === 'delete') {
      const data = String(display);
      setDisplay(data.slice(0, -1));
    } else if (value === 'clear') {
      setDisplay('');
    } else {
      if (type === 'symbol') {
        const lastChar = display.slice(-1);
        if (lastChar === value) {
          // jika symbol terakhir sama dengan symbol baru, tidak perlu menambahkan lagi
          return;
        }
        setRadioValue('1');
        setDisplay(display + value);
      } else {
        // const operatorRegex = /[+\-*\/%]{1,2}(?=\d)/g;
        // const operator = display.match(operatorRegex);
        // if (operator) {
        //   setRadioValue('1');
        // }
        setRadioValue('1');
        setDisplay(display + value);
      }
    }
  };

  const handleLabel = () => {
    if (display !== '') {
      setLabelClear(true);
    } else {
      setLabelClear(false);
    }
  };

  useEffect(() => {
    handleLabel();
  }, [display]);

  const buttonValues = [
    { id: 'clear', label: labelClear ? 'C' : 'AC', value: 'clear', type: 'symbol' },
    { id: 'delete', label: 'Delete', value: 'delete', type: 'symbol' },
    { id: 'persen', label: '%', value: '%', type: 'symbol' },
    { id: 'divide', label: '/', value: '/', type: 'symbol' },
    { id: 'seven', label: '7', value: '7', type: 'numeric' },
    { id: 'eight', label: '8', value: '8', type: 'numeric' },
    { id: 'nine', label: '9', value: '9', type: 'numeric' },
    { id: 'multiply', label: 'x', value: '*', type: 'symbol' },
    { id: 'four', label: '4', value: '4', type: 'numeric' },
    { id: 'five', label: '5', value: '5', type: 'numeric' },
    { id: 'six', label: '6', value: '6', type: 'numeric' },
    { id: 'subtract', label: '-', value: '-', type: 'symbol' },
    { id: 'one', label: '1', value: '1', type: 'numeric' },
    { id: 'two', label: '2', value: '2', type: 'numeric' },
    { id: 'three', label: '3', value: '3', type: 'numeric' },
    { id: 'add', label: '+', value: '+', type: 'symbol' },
    { id: 'decimal', label: '.', value: '.', type: 'symbol' },
    { id: 'zero', label: '0', value: '0', type: 'numeric' },
    { id: 'equals', label: '=', value: '=', type: 'symbol' }
  ];

  console.log(modal.status);

  return (
    <Container>
      <Row>
        {modal && modal.status && (
          <Col>
            <AlertBasic type="danger" message="data yang anda masukan tidak sesuai !" />
          </Col>
        )}

        <Col xl={12} className="text-center">
          <h1 className="title-home">Freelance Calculator</h1>
        </Col>
      </Row>
      <Row>
        <Col xl={12} className="d-flex justify-content-end">
          <h6
            style={{
              marginTop: '10px',
              marginRight: '5px'
            }}>
            Hasil Dari Calculator menggunakan :
          </h6>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}>
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row
        style={{
          margin: '50px auto'
        }}>
        <Col>
          <div>
            <input
              type="text"
              className="display-calculator"
              onChange={(e) => setDisplay(`${e.target.value}`)}
              value={radioValue === '1' ? display : ConvertNumberToWord(display)}
            />
            {/* <div className="display-calculator">
              {radioValue === '1' ? display : ConvertNumberToWord(display)}
            </div> */}
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div className="button-grid">
            {buttonValues.map((button) => (
              <Button
                key={button.id}
                id={button.id}
                onClick={() => handleClick(button.type, button.value)}>
                {button.label}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const mapToProps = (state) => {
  return {
    modal: state.modal.showModalAlert
  };
};
export default connect(mapToProps, {})(Home);
