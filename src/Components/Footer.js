import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="main-footer">
        <div class="footer-inner">
          <div class="footer-top">
            <div class="footer-txt">
              <div class="footer-txt-left">
                <div class="footer-nav">
                  <ul>
                    <li>
                      <a href="#">이용약관</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="#">개인정보처리방침</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=6658601867">사업자정보조회</a>
                    </li>
                  </ul>
                </div>
                <div class="detail">
                  <p>대표자 : 박제영<span>|</span>주소 : 경기 용인시 기흥구 서천로 201번길 14, 355호</p>
                  <p>사업자등록번호 : 665-86-01867<span>|</span>통신판매업신고번호 : 2020-용인기흥-2241
                  </p>
                  <p>Tel : 070 7714 7002<span>|</span>Fax : 0504 377 7050<span>|</span>Mail : jeyoung@manwol.com</p>
                  <p>계좌번호 : 신한은행 (주)만월회 100035029403</p>
                </div>
              </div>
              <div class="footer-txt-right">
                <div class="tel">
                  <p>고객센터</p>
                  <strong>040 · 7714 · 7002</strong>
                  <div class="time">
                    <p>월-금 : 9:00 ~ 18:00(주말/공휴일 제외)</p>
                    <p>점심시간 : 12:00 ~ 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>ⓒ 2020. ㈜만월회 all right reserved.</p>
            <span>본 사이트는 포트폴리오 용도로 만들어졌습니다.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
