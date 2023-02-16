import React, { useEffect, useState } from 'react';
import './style.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function CustomDial(props){
  return <Dialog open={props.DialMod}>
  <DialogTitle>사용법</DialogTitle>
      <DialogContent> 
          <DialogContentText>
              1. ai에게 할 질문이 한글이라면 번역을 위한 한글 질문을 입력해주시거나 추천 질문 버튼을 눌러주세요.<br />
              2. 번역된 질문 또는 직접 입력한 영어 질문이 'ai에게 질문하기' 버튼을 누르시면 아래에 답변이 출력됩니다.
          </DialogContentText>
          <DialogActions>
              <Button variant='contained' onClick={() => {props.DialOff()}}>닫기</Button>
          </DialogActions>
      </DialogContent>
</Dialog>
}

function DialOnButton(props){
  return <Button variant='outlined' onClick={() => {props.DialOn()}}>도움말 다시열기</Button>
}

export default function App() {
  const [dialMod, setDialMod] = useState(true)
  return (
    <div>
      <CustomDial DialMod={dialMod} DialOff={() => {setDialMod(false)}}></CustomDial>
      <DialOnButton DialOn={() => {setDialMod(true)}}></DialOnButton>
    </div>
  );
}
