export default function List({ info ,index,onClick}) {
    const styleImg = {
        width: `20vw`,
        height: `8vw`,
        backgroundImage: `url('${info.avatar}')`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        borderRadius: `0.1rem`,
        boxShadow: `0 0 5px rgba(0,0,0,0.5)`,
        margin: ``
    }
    return (
        <tr key={index}>
            <td>
                <div style={styleImg}></div>
            </td>
            <td style={{ padding: '0 3rem' }}>
                <p className='info__name'>{info.name}</p>
            </td>
            <td>
                <p className='sale-off'>{info.sale != 0 ? `-${info.sale}%` : ''}</p>
            </td>
            <td className='price'>
                {info.sale != 0 ?
                    <p className='price--before'>
                        {(info.price * 1000)
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                            )}đ
                    </p>
                    : ``
                }
                <p className='price--after'>
                    {(info.price * 1000*(info.sale != 0 ? (100-info.sale)/100 : 1))
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+\.)/g, '$1.'
                        )}đ
                </p>

            </td>
            <td style={{ padding: '0 1.5rem' }}>
                <div onClick={()=>onClick(index)} className='btn-custom'>x</div>
            </td>
        </tr>
    )

}