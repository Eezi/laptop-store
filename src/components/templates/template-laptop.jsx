import React from 'react';
import styles from './Laptops.module.css';

const TemplateLaptops = () =>  {
    return(
        <div className={styles.templateLapop}>
            <h1>The Laptop Store!</h1>
        <div class="laptop">
            <p class="laptop__price">{%PRICE%}</p>
            <a href="overview.html" class="laptop__back"><span class="emoji-left">👈</span>Back</a>
            <div class="laptop__hero">
                <img src="data/img/macbook-pro-15.jpg" alt="" class="laptop__img">
            </div>
            <h2 class="laptop__name">{%%}/h2>
            <div class="laptop__details">
                <p><span class="emoji-left">🖥</span> {%SCREEN%}</p>
                <p><span class="emoji-left">🧮</span> {%CPU%}</p>
                <p><span class="emoji-left">💾</span> {%STORAGE%}</p>
                <p><span class="emoji-left">📦</span> {%RAM%}</p>
            </div>
            <p class="laptop__description">
            {%DESCRIPTION%}
            </p>
            <p class="laptop__source">Source: <a href="https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361"
                    target="_blank">https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361</a></p>
            <a href="#" class="laptop__link">Buy now for {%PRICE%} <span class="emoji-right">🥳 😍</span></a>
        </div>
    </div>
    </div>
    );
}

export default TemplateLaptops;