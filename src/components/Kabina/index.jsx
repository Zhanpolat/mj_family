import React from 'react'
import style from './Kabina.module.scss'


const Kabina = ({ color, handlColor }) => {

    const stol = [
        <svg xmlns="http://www.w3.org/2000/svg" width="238" height="114" viewBox="0 0 238 114" fill="none">
            <mask id="path-1-inside-1_348_2740" fill="white">
                <rect x="16" y="16" width="206" height="82" rx="2" />
            </mask>
            <rect x="16" y="16" width="206" height="82" rx="2" fill="white" stroke="#CECECE" stroke-width="44" mask="url(#path-1-inside-1_348_2740)" />
            <mask id="path-2-inside-2_348_2740" fill="white">
                <rect x="27.5386" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="27.5386" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-2-inside-2_348_2740)" />
            <mask id="path-3-inside-3_348_2740" fill="white">
                <rect x="77.1539" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="77.1539" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-3-inside-3_348_2740)" />
            <mask id="path-4-inside-4_348_2740" fill="white">
                <rect x="126.769" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="126.769" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-4-inside-4_348_2740)" />
            <mask id="path-5-inside-5_348_2740" fill="white">
                <rect x="176.385" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="176.385" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-5-inside-5_348_2740)" />
            <mask id="path-6-inside-6_348_2740" fill="white">
                <rect x="27.5386" y="100" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="27.5386" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-6-inside-6_348_2740)" />
            <mask id="path-7-inside-7_348_2740" fill="white">
                <rect x="77.1539" y="100" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="77.1539" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-7-inside-7_348_2740)" />
            <mask id="path-8-inside-8_348_2740" fill="white">
                <rect x="126.769" y="100" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="126.769" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-8-inside-8_348_2740)" />
            <mask id="path-9-inside-9_348_2740" fill="white">
                <rect x="176.385" y="100" width="40.6154" height="13.5385" rx="2" />
            </mask>
            <rect x="176.385" y="100" width="40.6154" height="13.5385" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-9-inside-9_348_2740)" />
            <mask id="path-10-inside-10_348_2740" fill="white">
                <rect x="1" y="36" width="13" height="41" rx="2" />
            </mask>
            <rect x="1" y="36" width="13" height="41" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-10-inside-10_348_2740)" />
            <mask id="path-11-inside-11_348_2740" fill="white">
                <rect x="224" y="36" width="13" height="41" rx="2" />
            </mask>
            <rect x="224" y="36" width="13" height="41" rx="2" fill="white" stroke="#CECECE" stroke-width="10.1538" mask="url(#path-11-inside-11_348_2740)" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="189" viewBox="0 0 144 189" fill="none">
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
        </svg>,
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
    ]

    return (
        <div className={`${style.orders} ${style.table}`}>
            < div className={style.kabina}>
                {
                    stol.map((s, index) => (
                        <div key={index + 1}>
                            <div
                                key={index}
                                onClick={() => handlColor(index)}
                                className={color === (index + 1) ? style.color : ''}
                            >
                                {s}
                                <span>{++index}</span>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div>
    )
}

export default Kabina