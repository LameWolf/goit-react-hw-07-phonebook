import { Hourglass } from 'react-loader-spinner';
import s from 'styled-components';

const WrapperLoader = s.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Loader = () => {
  return (
    <WrapperLoader>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </WrapperLoader>
  );
};

export default Loader;
