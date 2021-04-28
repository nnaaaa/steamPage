import { useContext } from 'react'

import List from './list'
import { DataConsumer } from '../../../data/data'
export default function Cart() {
    const { gameInfo } = useContext(DataConsumer)
    return (
        <section className='cart'>
            <table>
                <thead>
                    <td>Product</td>
                    <td></td>
                    <td>Price</td>
                    <td>Sale</td>
                    <td></td>
                </thead>
                <tbody>
                    {gameInfo.map(item => <List info={item} />)}
                </tbody>
                <thead>
                    <td colspan="2">Total</td>
                    <td colspan="3" style={{ color: `lightgreen` }}>
                        {(gameInfo.reduce((accumulate, item) =>
                            accumulate + parseInt(item.price) *
                            (item.sale != 0 ? (100 - item.sale) / 100 : 1)
                            , 0
                        )*1000).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
                        }
                        .đ
                    </td>
                </thead>
            </table>
        </section >
    )
}