import Link from 'next/link'
export default  function Merchant() {
    return (
        <div>
            <h1>Merchant</h1>
          <p>Don't have an account? <Link classname ="font-bold" href="../Merchant-Bank"> Signup here</Link></p>  
        </div>
    )
}