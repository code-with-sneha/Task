import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className='content'>
        <div className="one">
            <img src="./vector.png" alt="" height={50} width={50} /><h2 className='header'>Design Research</h2>
            <p>content research is the process of finding out the best answers you can to the questions you have about how your content works for the people who are using it. It’s about digging deeper than the stats we all know and love to ask non-standard questions in ways that enable you to understand, trust, and act on the answers you get.</p>
            </div>
        <div className="two">
            <img src="./optimization.png" alt="" height={50} width={50} /><h2 className='header'>SEO Optimization</h2>
            <p>SEO stands for search engine optimization. SEO practitioners optimize websites, web pages and content for the purposes of ranking higher in search engines, like Google. SEO is a set of practices designed to improve the appearance, positioning, and usefulness of multiple types of content in the organic search results.</p>
            </div>
            <div className="three">
            <img src="./coding.png" alt="" height={50} width={50} /><h2 className='header'>Design Research</h2>
            <p>content research is the process of finding out the best answers you can to the questions you have about how your content works for the people who are using it. It’s about digging deeper than the stats we all know and love to ask non-standard questions in ways that enable you to understand, trust, and act on the answers you get.</p>
            </div>
        <div className="four">
            <img src="./info.png" alt="" height={50} width={50} /><h2 className='header'>Design Research</h2>
            <p>content research is the process of finding out the best answers you can to the questions you have about how your content works for the people who are using it. It’s about digging deeper than the stats we all know and love to ask non-standard questions in ways that enable you to understand, trust, and act on the answers you get.</p>
            </div>
    </div>
  )
}

export default Content