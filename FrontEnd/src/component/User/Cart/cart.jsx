import Row from './element'

export default function Cart() {
    return (
        <section className='cart'>
            <table>
                <thead>
                    <td></td>
                    <td>
                        Product
                    </td>
                    <td>
                        Price
                    </td>
                </thead>
                <tbody>
                    <Row/>
                </tbody>
                <thead>
                    <td>

                    </td>
                    <td>
                        Total
                    </td>
                    <td>
                        total price
                    </td>
                </thead>
            </table>
        </section >
    )
}