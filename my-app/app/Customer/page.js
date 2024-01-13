import Link from 'next/link'

export default function Costumer() {
    return (
        <div>
            <h1>Costumer</h1>
            <p>Don't have an account? <Link classname ="text-blue font-bold" href="../Customer-Bank"> Signup here</Link></p>
        </div>
    )
}