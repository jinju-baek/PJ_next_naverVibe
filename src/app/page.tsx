import Menu from "@/app/components/menu";
import ListItem from "@/app/components/listItem";

export default function Home() {
    return (
        <div className={'body'}>

            <div className={'flex-box'}>

                <div className={'nav'}>
                    <div className={'logo'}>logo</div>
                    <a href={'#'} className={'login-btn'}>로그인</a>
                    <span className={'msg'}>로그인하고 할인 멤버십 확인하기</span>
                    <a href={'#'} className={'membership-btn'}>멤버십 구독</a>
                    <input className={'search-bar'} placeholder='VIBE 검색'></input>
                    <div style={{'borderBottom': '1px solid hsla(0,0%,100%,.1)'}}><Menu order='1'></Menu></div>
                    <div><Menu order={'2'}></Menu></div>
                </div>

                <div className={'content'}>
                    <div className={'banner'}>
                        <a href={'#'} className={'banner-img1'}>
                            <img/>
                        </a>
                        <a href={'#'} className={'banner-img2'}>
                            <div>
                                <img/>
                                <p className={'banner-title'}>이주의 디깅 #174<br/>실리카겔</p>
                                <div className={'banner-content'}>'실리카겔 붐은 온다!'. 몇 년 전부터 실리카겔 팬들이 예언처럼 되뇌던 말이다. 2015년 데뷔
                                    이후 한국 인디 록 씬에 이름을 새겨온 그들은
                                    2023년, 다양한 무대에오르며 그...
                                </div>
                                <div className={'banner-footer'}>VIBE MAG · 2024.01.09</div>
                            </div>
                        </a>
                    </div>
                    <div className={'list'}>
                        <div className={'list-top'}>
                            <div className={'list-title'}>제목</div>
                            <a className={'list-btn'} href={'#'}>더보기</a>
                        </div>

                        <ListItem fst={'이주의 디깅 #175'} snd={'시대유감'} date={'2024.01.23'} img={''}></ListItem>

                    </div>
                </div>

            </div>

            <div className={'footer'}>footer</div>
        </div>
    )
}
