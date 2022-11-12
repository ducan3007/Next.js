import { Fragment } from 'react'
import HeaderLayout from './Header/HeaderLayout'

type Props = {
  children: React.ReactNode | JSX.Element
}

const MainLayout = (props: Props) => {
  return (
    <Fragment>
      <HeaderLayout />
      {props.children}
    </Fragment>
  )
}

export default MainLayout
