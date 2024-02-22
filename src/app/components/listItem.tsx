import './listItem.css'

const ListItem = (prop) => {
    const {fst, snd, date, img} = prop;
    return (
        <>
            <div className={'list-item'}>
                <div className={'list-item-img'}>
                    <a href={'#'}>
                        <img/>
                    </a>
                </div>
                <a href={'#'} className={'list-item-title'}>
                    <div>{fst}</div>
                    <div>{snd}</div>
                </a>
                <div className={'list-item-date'}>{date}</div>
            </div>
        </>
    )
}
export default ListItem;