import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>


      <AuthInputContainer>
        <AuthInput 
          label="帳號"
          placeholder="請輸入帳號"/>
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput  
          label="Email"
          placeholder="請輸入 email"  />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput 
          type="password"
          label="密碼"
          placeholder="請輸入密碼" />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
