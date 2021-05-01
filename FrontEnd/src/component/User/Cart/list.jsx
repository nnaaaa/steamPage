import { useContext } from 'react'
import {DataConsumer} from '../../../data/data'
export default function List({ info, index, onClick }) {
    const { Price } = useContext(DataConsumer)
    const styleImg = {
        backgroundImage: `url('${info.avatar}')`,
    }
    return (
        <tr key={index} className='info'>
            <td>
                <div className='image' style={styleImg}></div>
            </td>
            <td style={{ padding: '0 3rem' }}>
                <p className='name'>{info.name}</p>
            </td>
            <td>
                <p className='sale-off'>{info.sale != 0 ? `-${info.sale}%` : ''}</p>
            </td>
            <td className='price'>
                {info.sale !== 0 ?
                    <p className='price--before'>
                        {Price(info.price)}
                    </p>
                    : ``
                }
                <p className='price--after'>
                    {Price(String(info.price * (100 - info.sale) / 100))}
                </p>
            </td>
            <td>
                <div onClick={() => onClick(index)}
                    className='delete-btn'>
                    x
                </div>
            </td>
        </tr>
    )

}