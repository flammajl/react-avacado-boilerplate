import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="React Avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  );
}
