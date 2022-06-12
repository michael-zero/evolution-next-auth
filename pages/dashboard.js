import React from 'react'
import {getSession, signIn} from 'next-auth/react'

const Dashboard = () => {
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if(!session){
        signIn()
      }else{
        setLoading(false)
      }
    }
    securePage()
  },[])

  if(loading){
    return <h2>Loading ...</h2>
  }
  return (
    <div>dashboard</div>
  )
}

export default Dashboard