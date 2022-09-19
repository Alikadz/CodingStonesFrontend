import { ReactComponent as ZenDev } from "../../assets/icons/ZenDev.svg";
import { ReactComponent as Google } from "../../assets/icons/Google.svg";
import { Button } from "../../components/common/button/Button.styled";
import { Background, LeftSide, RightSide } from "./Login.styled";
import { Text } from "../../components/common/text/Text.styled";
import Wrapper from "../../components/common/wrapper/Wrapper";
import { theme } from "../../style/Theme";
import React from "react";
import axios from "axios";

const LoginPage = () => {

  const loginHandler = async () => {
    const res = await axios.get('https://stg-coding-stones-api.zendev.se/google-login?uri=https://stg-coding-stones.zendev.se/google-auth', {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }, 
    });
    console.log(res)
    window.open(res.data,"_self");
  }  

  return (
    <Background>
      <LeftSide>
        <Wrapper display="flex" direction="column">
          <Text size="40px" weight="bold" color={theme.colors.black100}>
            Sign in
          </Text>
          <Text size="17px" color={theme.colors.grey1000}>
            Welcome back! Please sign in with your ZenDev account.
          </Text>
          <Button border='1px solid #DBDEE1' borderRadius='5px' className='mt-10' onClick={loginHandler} >
            <Google width='1.625rem' height='1.6875rem' />
            <Text className='pl-3' size='19px' color={theme.colors.black}>Sign in with Google</Text>
          </Button>
        </Wrapper>
      </LeftSide>
      <RightSide>
        <ZenDev />
      </RightSide>
    </Background>
  );
};

export default LoginPage;
