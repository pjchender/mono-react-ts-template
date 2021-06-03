import { FC } from 'react';

interface Props {
  text: string;
}

const Banner: FC<Props> = ({ text }: Props) => {
  return (
    <div>
      <h1>Hello, {text}</h1>
    </div>
  );
};

export default Banner;
