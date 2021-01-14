import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  ButtonContainer,
  ButtonCustomer,
  BackgroundIMG,
  ButtonProvider,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('submit =)');
  }, []);

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft color="#fff" size={35} />
      </Link>
      <Content>
        <AnimationContainer>
          <h1>Faça seu login</h1>
          <ButtonContainer>
            <ButtonProvider>Sou tatuador</ButtonProvider>
            <ButtonCustomer>Sou cliente</ButtonCustomer>
          </ButtonContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="button">Entrar</Button>

            <Link to="/forgot-password">Esqueceu a senha?</Link>
          </Form>
          <Link to="/signup">Não tem uma conta?</Link>
        </AnimationContainer>
      </Content>
      <BackgroundIMG />
    </Container>
  );
};

export default SignIn;
