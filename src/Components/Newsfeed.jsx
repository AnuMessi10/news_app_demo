import React, { useState, useEffect } from 'react'

export default function Newsfeed() {

    const [items, updateItems] = useState([]);

    const [pageNo, updatePageNo] = useState([1]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((json) => updateItems(json.slice(5 * (pageNo - 1), 5 * (pageNo - 1) + 5)))
    })

    function nextPage(event) {
        updatePageNo(event.target.value | event.target.innerText);
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("news-row")[i].style.visibility = "visible";
        }
    }

    return (
        <div className='newsfeed'>
            {items.map(item =>
                <div className="news-row">
                    <div className="newscard">
                        <div className="news-img">
                            <img src="https://media.istockphoto.com/photos/price-of-btc-is-going-to-breakout-picture-id1310618429?b=1&k=20&m=1310618429&s=170667a&w=0&h=DsVwbbr3jKcS711y3l_-Bw-uX2RPC5apPM3FqUdNCU4=" alt="newsImg" />
                        </div>
                        <div className="news-content" key={item.id}>
                            <div className="news-title">
                                <strong>{item.title}</strong>
                            </div>
                            <div className="news-body">
                                <p>{item.body}</p>
                            </div>
                            <div className="news-date">
                                <strong>Mon, 21 Dec 12:37 GMT</strong>
                            </div>
                        </div>
                    </div>
                    <div className="dismissBtn">
                        <i class="fas fa-times" onClick={() => {
                            var x;
                            if (item.id % 5 === 0)
                                x = document.getElementsByClassName("news-row")[4];
                            else
                                x = document.getElementsByClassName("news-row")[item.id % 5 - 1];
                            x.style.visibility = "hidden";
                        }}></i>
                    </div>
                </div>
            )}
            <div className="pageSelector">
                <i class="fas fa-angle-double-left" id="fwdArrow" onClick={nextPage}><span className='hidden'>{parseInt(pageNo) - 1}</span></i>
                <button id="currentPage">{pageNo}</button>
                <button onClick={nextPage}>{parseInt(pageNo) + 1}</button>
                <button onClick={nextPage}>{parseInt(pageNo) + 2}</button>
                <i class="fas fa-angle-double-right" id="backArrow" onClick={nextPage}><span className='hidden'>{parseInt(pageNo) + 1}</span></i>
            </div>
        </div>
    )
}
