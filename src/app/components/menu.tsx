const Menu = (props) => {
    let menuList = [];
    if (props.order === '1') {
        menuList = ['투데이', '차트', '최신앨범', 'DJ스테이션', 'VIBE MAG', '이달의 노래'];
    } else if (props.order === '2') {
        menuList = ['서비스 소개', '내돈내듣', 'VIBE 오디오'];
    }
    return (
        <>
            {/*{fstMenu.map((item) => (
                <div>{item}</div>
            ))}*/}
            {menuList.map((item, index) => {
                return (
                    <a href={'#'} key={index}
                       style={{'margin': '10px', 'width': '197px', 'display': 'block'}}>{item}</a>
                )
            })}
        </>
    )
}
export default Menu;
