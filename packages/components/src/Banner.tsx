import { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs({
  'data-testid': 'banner',
})<{ isDark: boolean }>`
  font-size: 24px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`;

interface Props {
  text: string;
}
const Banner: FC<Props> = ({ text }: Props) => {
  return (
    <div>
      <StyledHeader isDark>Hello, {text}</StyledHeader>
    </div>
  );
};

export default Banner;
