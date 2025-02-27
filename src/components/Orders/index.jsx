import React from 'react'
import style from './Orders.module.scss'

const Orders = ({ color, handlColor, next }) => {
  return (
    <div className={`${style.orders} ${next ? '' : style.table}`}>
      <div className={style.common}>
        <div>
          <div className={style.six}>
            <div onClick={() => handlColor(6)} className={color === 6 ? style.color : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="213" height="114" viewBox="0 0 213 114" fill="none">
                <mask id="path-1-inside-1_348_2660" fill="white">
                  <rect x="16" y="16" width="181" height="82" rx="2" />
                </mask>
                <rect x="16" y="16" width="181" height="82" rx="2" fill="white" stroke="#CECECE" stroke-width="44" mask="url(#path-1-inside-1_348_2660)" />
                <mask id="path-2-inside-2_348_2660" fill="white">
                  <rect x="37.5385" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="37.5385" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-2-inside-2_348_2660)" />
                <mask id="path-3-inside-3_348_2660" fill="white">
                  <rect x="87" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="87" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-3-inside-3_348_2660)" />
                <mask id="path-4-inside-4_348_2660" fill="white">
                  <rect x="87" y="100" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="87" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-4-inside-4_348_2660)" />
                <mask id="path-5-inside-5_348_2660" fill="white">
                  <rect x="136.462" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="136.462" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-5-inside-5_348_2660)" />
                <mask id="path-6-inside-6_348_2660" fill="white">
                  <rect x="136.462" y="100" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="136.462" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-6-inside-6_348_2660)" />
                <mask id="path-7-inside-7_348_2660" fill="white">
                  <rect x="37.5385" y="100.461" width="40.6154" height="13.5385" rx="2" />
                </mask>
                <rect x="37.5385" y="100.461" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-7-inside-7_348_2660)" />
                <mask id="path-8-inside-8_348_2660" fill="white">
                  <rect x="1" y="37" width="13" height="41" rx="2" />
                </mask>
                <rect x="1" y="37" width="13" height="41" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-8-inside-8_348_2660)" />
                <mask id="path-9-inside-9_348_2660" fill="white">
                  <rect x="199" y="37" width="13" height="41" rx="2" />
                </mask>
                <rect x="199" y="37" width="13" height="41" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-9-inside-9_348_2660)" />
              </svg>
              <span>6</span>
            </div>
          </div>
          <div>
            <div>
              <div className={style.eleven}>
                <div onClick={() => handlColor(11)} className={color === 11 ? style.color : ''}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="114" viewBox="0 0 83 114" fill="none">
                    <mask id="path-1-inside-1_295_2668" fill="white">
                      <rect y="15.5385" width="82.9231" height="82.9231" rx="2" />
                    </mask>
                    <rect y="15.5385" width="82.9231" height="82.9231" rx="2" fill="white" stroke="#CECECE" stroke-width="44" mask="url(#path-1-inside-1_295_2668)" />
                    <mask id="path-2-inside-2_295_2668" fill="white">
                      <rect x="22" width="40.6154" height="13.5385" rx="2" />
                    </mask>
                    <rect x="22" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-2-inside-2_295_2668)" />
                    <mask id="path-3-inside-3_295_2668" fill="white">
                      <rect x="22" y="100.462" width="40.6154" height="13.5385" rx="2" />
                    </mask>
                    <rect x="22" y="100.462" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-3-inside-3_295_2668)" />
                  </svg>
                  <span>11</span>
                </div>
              </div>
              <div className={style.twelf}>
                <div onClick={() => handlColor(12)} className={color === 12 ? style.color : ''}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="114" viewBox="0 0 83 114" fill="none">
                    <mask id="path-1-inside-1_295_2668" fill="white">
                      <rect y="15.5385" width="82.9231" height="82.9231" rx="2" />
                    </mask>
                    <rect y="15.5385" width="82.9231" height="82.9231" rx="2" fill="white" stroke="#CECECE" stroke-width="44" mask="url(#path-1-inside-1_295_2668)" />
                    <mask id="path-2-inside-2_295_2668" fill="white">
                      <rect x="22" width="40.6154" height="13.5385" rx="2" />
                    </mask>
                    <rect x="22" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-2-inside-2_295_2668)" />
                    <mask id="path-3-inside-3_295_2668" fill="white">
                      <rect x="22" y="100.462" width="40.6154" height="13.5385" rx="2" />
                    </mask>
                    <rect x="22" y="100.462" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-3-inside-3_295_2668)" />
                  </svg>
                  <span>12</span>
                </div>
              </div>
            </div>
            <div className={style.four}>
              <div onClick={() => handlColor(7)} className={color === 7 ? style.color : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 136 134" fill="none">
                  <mask id="path-1-inside-1_347_2630" fill="white">
                    <rect x="19" y="18" width="98" height="98" rx="2" />
                  </mask>
                  <rect x="19" y="18" width="98" height="98" rx="2" fill="white" stroke="#CECECE" stroke-width="52" mask="url(#path-1-inside-1_347_2630)" />
                  <mask id="path-2-inside-2_347_2630" fill="white">
                    <rect x="45" width="48" height="16" rx="2" />
                  </mask>
                  <rect x="45" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-2-inside-2_347_2630)" />
                  <mask id="path-3-inside-3_347_2630" fill="white">
                    <rect x="45" y="118" width="48" height="16" rx="2" />
                  </mask>
                  <rect x="45" y="118" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-3-inside-3_347_2630)" />
                  <mask id="path-4-inside-4_347_2630" fill="white">
                    <rect x="119" y="41" width="17" height="52" rx="2" />
                  </mask>
                  <rect x="119" y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_347_2630)" />
                  <mask id="path-5-inside-5_347_2630" fill="white">
                    <rect y="41" width="17" height="52" rx="2" />
                  </mask>
                  <rect y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_347_2630)" />
                </svg>
                <span>7</span>
              </div>
              <div onClick={() => handlColor(8)} className={color === 8 ? style.color : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 136 134" fill="none">
                  <mask id="path-1-inside-1_347_2630" fill="white">
                    <rect x="19" y="18" width="98" height="98" rx="2" />
                  </mask>
                  <rect x="19" y="18" width="98" height="98" rx="2" fill="white" stroke="#CECECE" stroke-width="52" mask="url(#path-1-inside-1_347_2630)" />
                  <mask id="path-2-inside-2_347_2630" fill="white">
                    <rect x="45" width="48" height="16" rx="2" />
                  </mask>
                  <rect x="45" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-2-inside-2_347_2630)" />
                  <mask id="path-3-inside-3_347_2630" fill="white">
                    <rect x="45" y="118" width="48" height="16" rx="2" />
                  </mask>
                  <rect x="45" y="118" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-3-inside-3_347_2630)" />
                  <mask id="path-4-inside-4_347_2630" fill="white">
                    <rect x="119" y="41" width="17" height="52" rx="2" />
                  </mask>
                  <rect x="119" y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_347_2630)" />
                  <mask id="path-5-inside-5_347_2630" fill="white">
                    <rect y="41" width="17" height="52" rx="2" />
                  </mask>
                  <rect y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_347_2630)" />
                </svg>
                <span>8</span>
              </div>
              <div onClick={() => handlColor(9)} className={color === 9 ? style.color : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="116" viewBox="0 0 90 94" fill="none">
                  <path d="M72.873 32.1548H84.127C84.5237 32.1548 84.8452 32.4763 84.8452 32.873V61.127C84.8452 61.5237 84.5237 61.8452 84.127 61.8452H72.873C72.4763 61.8452 72.1548 61.5237 72.1548 61.127V32.873C72.1548 32.4763 72.4763 32.1548 72.873 32.1548Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <path d="M24.8189 6.58052L32.2472 15.0346C32.509 15.3326 32.4797 15.7865 32.1817 16.0483L10.957 34.6976C10.659 34.9595 10.2052 34.9301 9.94332 34.6321L2.51502 26.178C2.25319 25.88 2.2825 25.4262 2.58049 25.1644L23.8052 6.51505C24.1032 6.25322 24.557 6.28253 24.8189 6.58052Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <path d="M13.0163 80.9991L16.9133 70.4414C17.0507 70.0693 17.4637 69.879 17.8359 70.0163L44.3418 79.8001C44.7139 79.9375 44.9043 80.3505 44.7669 80.7226L40.8699 91.2803C40.7325 91.6525 40.3195 91.8428 39.9473 91.7054L13.4414 81.9217C13.0693 81.7843 12.879 81.3713 13.0163 80.9991Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <rect x="16.3373" y="21.3373" width="51.7143" height="51.7143" rx="25.8572" fill="white" stroke="#CECECE" stroke-width="18.6746" />
                </svg>
                <span>9</span>
              </div>
              <div onClick={() => handlColor(10)} className={color === 10 ? style.color : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="116" viewBox="0 0 90 94" fill="none">
                  <path d="M72.873 32.1548H84.127C84.5237 32.1548 84.8452 32.4763 84.8452 32.873V61.127C84.8452 61.5237 84.5237 61.8452 84.127 61.8452H72.873C72.4763 61.8452 72.1548 61.5237 72.1548 61.127V32.873C72.1548 32.4763 72.4763 32.1548 72.873 32.1548Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <path d="M24.8189 6.58052L32.2472 15.0346C32.509 15.3326 32.4797 15.7865 32.1817 16.0483L10.957 34.6976C10.659 34.9595 10.2052 34.9301 9.94332 34.6321L2.51502 26.178C2.25319 25.88 2.2825 25.4262 2.58049 25.1644L23.8052 6.51505C24.1032 6.25322 24.557 6.28253 24.8189 6.58052Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <path d="M13.0163 80.9991L16.9133 70.4414C17.0507 70.0693 17.4637 69.879 17.8359 70.0163L44.3418 79.8001C44.7139 79.9375 44.9043 80.3505 44.7669 80.7226L40.8699 91.2803C40.7325 91.6525 40.3195 91.8428 39.9473 91.7054L13.4414 81.9217C13.0693 81.7843 12.879 81.3713 13.0163 80.9991Z" fill="white" stroke="#CECECE" stroke-width="4.30953" />
                  <rect x="16.3373" y="21.3373" width="51.7143" height="51.7143" rx="25.8572" fill="white" stroke="#CECECE" stroke-width="18.6746" />
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.five}>
          <div onClick={() => handlColor(1)} className={color === 1 ? style.color : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 136 134" fill="none">
              <mask id="path-1-inside-1_347_2630" fill="white">
                <rect x="19" y="18" width="98" height="98" rx="2" />
              </mask>
              <rect x="19" y="18" width="98" height="98" rx="2" fill="white" stroke="#CECECE" stroke-width="52" mask="url(#path-1-inside-1_347_2630)" />
              <mask id="path-2-inside-2_347_2630" fill="white">
                <rect x="45" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-2-inside-2_347_2630)" />
              <mask id="path-3-inside-3_347_2630" fill="white">
                <rect x="45" y="118" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" y="118" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-3-inside-3_347_2630)" />
              <mask id="path-4-inside-4_347_2630" fill="white">
                <rect x="119" y="41" width="17" height="52" rx="2" />
              </mask>
              <rect x="119" y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_347_2630)" />
              <mask id="path-5-inside-5_347_2630" fill="white">
                <rect y="41" width="17" height="52" rx="2" />
              </mask>
              <rect y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_347_2630)" />
            </svg>
            <span>1</span>
          </div>
          <div onClick={() => handlColor(2)} className={color === 2 ? style.color : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 136 134" fill="none">
              <mask id="path-1-inside-1_347_2630" fill="white">
                <rect x="19" y="18" width="98" height="98" rx="2" />
              </mask>
              <rect x="19" y="18" width="98" height="98" rx="2" fill="white" stroke="#CECECE" stroke-width="52" mask="url(#path-1-inside-1_347_2630)" />
              <mask id="path-2-inside-2_347_2630" fill="white">
                <rect x="45" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-2-inside-2_347_2630)" />
              <mask id="path-3-inside-3_347_2630" fill="white">
                <rect x="45" y="118" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" y="118" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-3-inside-3_347_2630)" />
              <mask id="path-4-inside-4_347_2630" fill="white">
                <rect x="119" y="41" width="17" height="52" rx="2" />
              </mask>
              <rect x="119" y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_347_2630)" />
              <mask id="path-5-inside-5_347_2630" fill="white">
                <rect y="41" width="17" height="52" rx="2" />
              </mask>
              <rect y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_347_2630)" />
            </svg>
            <span>2</span>
          </div>
          <div onClick={() => handlColor(3)} className={color === 3 ? style.color : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 136 134" fill="none">
              <mask id="path-1-inside-1_347_2630" fill="white">
                <rect x="19" y="18" width="98" height="98" rx="2" />
              </mask>
              <rect x="19" y="18" width="98" height="98" rx="2" fill="white" stroke="#CECECE" stroke-width="52" mask="url(#path-1-inside-1_347_2630)" />
              <mask id="path-2-inside-2_347_2630" fill="white">
                <rect x="45" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-2-inside-2_347_2630)" />
              <mask id="path-3-inside-3_347_2630" fill="white">
                <rect x="45" y="118" width="48" height="16" rx="2" />
              </mask>
              <rect x="45" y="118" width="48" height="16" rx="2" fill="white" stroke="#CECECE" stroke-width="12" mask="url(#path-3-inside-3_347_2630)" />
              <mask id="path-4-inside-4_347_2630" fill="white">
                <rect x="119" y="41" width="17" height="52" rx="2" />
              </mask>
              <rect x="119" y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_347_2630)" />
              <mask id="path-5-inside-5_347_2630" fill="white">
                <rect y="41" width="17" height="52" rx="2" />
              </mask>
              <rect y="41" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_347_2630)" />
            </svg>
            <span>3</span>
          </div>
          <div onClick={() => handlColor(4)} className={color === 4 ? style.color : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="145" viewBox="0 0 144 189" fill="none">
              <mask id="path-1-inside-1_346_2638" fill="white">
                <rect x="19" y="19" width="106" height="150" rx="2" />
              </mask>
              <rect x="19" y="19" width="106" height="150" rx="2" fill="white" stroke="#CECECE" stroke-width="56" mask="url(#path-1-inside-1_346_2638)" />
              <mask id="path-2-inside-2_346_2638" fill="white">
                <rect x="46.2307" width="51.6923" height="17.2308" rx="2" />
              </mask>
              <rect x="46.2307" width="51.6923" height="17.2308" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-2-inside-2_346_2638)" />
              <mask id="path-3-inside-3_346_2638" fill="white">
                <rect x="46.2307" y="171" width="51.6923" height="17.2308" rx="2" />
              </mask>
              <rect x="46.2307" y="171" width="51.6923" height="17.2308" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-3-inside-3_346_2638)" />
              <mask id="path-4-inside-4_346_2638" fill="white">
                <rect x="127" y="35" width="17" height="52" rx="2" />
              </mask>
              <rect x="127" y="35" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_346_2638)" />
              <mask id="path-5-inside-5_346_2638" fill="white">
                <rect y="35" width="17" height="52" rx="2" />
              </mask>
              <rect y="35" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_346_2638)" />
              <mask id="path-6-inside-6_346_2638" fill="white">
                <rect x="127" y="100" width="17" height="52" rx="2" />
              </mask>
              <rect x="127" y="100" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-6-inside-6_346_2638)" />
              <mask id="path-7-inside-7_346_2638" fill="white">
                <rect y="100" width="17" height="52" rx="2" />
              </mask>
              <rect y="100" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-7-inside-7_346_2638)" />
            </svg>
            <span>4</span>
          </div>
          <div onClick={() => handlColor(5)} className={color === 5 ? style.color : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="145" viewBox="0 0 144 189" fill="none">
              <mask id="path-1-inside-1_346_2638" fill="white">
                <rect x="19" y="19" width="106" height="150" rx="2" />
              </mask>
              <rect x="19" y="19" width="106" height="150" rx="2" fill="white" stroke="#CECECE" stroke-width="56" mask="url(#path-1-inside-1_346_2638)" />
              <mask id="path-2-inside-2_346_2638" fill="white">
                <rect x="46.2307" width="51.6923" height="17.2308" rx="2" />
              </mask>
              <rect x="46.2307" width="51.6923" height="17.2308" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-2-inside-2_346_2638)" />
              <mask id="path-3-inside-3_346_2638" fill="white">
                <rect x="46.2307" y="171" width="51.6923" height="17.2308" rx="2" />
              </mask>
              <rect x="46.2307" y="171" width="51.6923" height="17.2308" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-3-inside-3_346_2638)" />
              <mask id="path-4-inside-4_346_2638" fill="white">
                <rect x="127" y="35" width="17" height="52" rx="2" />
              </mask>
              <rect x="127" y="35" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-4-inside-4_346_2638)" />
              <mask id="path-5-inside-5_346_2638" fill="white">
                <rect y="35" width="17" height="52" rx="2" />
              </mask>
              <rect y="35" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-5-inside-5_346_2638)" />
              <mask id="path-6-inside-6_346_2638" fill="white">
                <rect x="127" y="100" width="17" height="52" rx="2" />
              </mask>
              <rect x="127" y="100" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-6-inside-6_346_2638)" />
              <mask id="path-7-inside-7_346_2638" fill="white">
                <rect y="100" width="17" height="52" rx="2" />
              </mask>
              <rect y="100" width="17" height="52" rx="2" fill="white" stroke="#CECECE" stroke-width="12.9231" mask="url(#path-7-inside-7_346_2638)" />
            </svg>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders