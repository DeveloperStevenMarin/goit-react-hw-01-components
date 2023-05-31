import { Perfil } from 'components/Perfil/Perfil';

const styleTest = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#010101',
};

export const App = ({ data }) => {
  return (
    <div style={styleTest}>
      <Perfil user={data} />
    </div>
  );
};