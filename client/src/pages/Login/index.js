import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const LoginPage = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const login = (arg1, arg2) => {
    console.log(arg1, arg2)
  }
  return (
    <div className="login__container">
      <h4>LoginPage</h4>
      <Input value={userName} setValue={setUserName} />
      <Input value={password} setValue={setPassword} />
      <Button value={'Login'} clickListener={login} clickListenerArgs={[userName, password]} />
      <Button value={'Register'}  />
    </div>
  )
}

export default LoginPage