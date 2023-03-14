import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
};

export const Template = ({ children }: TemplateProps) => {
  // 모드 변수
  const mode = useRecoilValue(getModeState);

  return <Layout mode={mode}>{children}</Layout>;
};