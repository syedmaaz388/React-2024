import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const CounterCard = () => {
 const dispatch = useDispatch();
 const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Deposit / Withdraw Money
        </Typography>
        <Typography variant="body1" component="div">
        </Typography>
        <div style={{marginTop:"30px"}} >
        <Button onClick={() => depositMoney(100)} variant="contained" style={{ marginRight: "10px" }}>
            Increment
          </Button>
          <Button
          onClick={() => withdrawMoney(100)}
           variant="contained" style={{ marginLeft: "10px" }}>
            Decrement
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CounterCard;
