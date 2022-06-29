import React, { FC } from 'react';

// imported images
import logo from '../../../../assets/ui-images/inst-info-keanu-logo.svg';
import locationIcon from '../../../../assets/ui-images/inst-location-icon.svg';
import clockIcon from '../../../../assets/ui-images/inst-time-icon.svg';
import phoneIcon from '../../../../assets/ui-images/inst-phone-icon.svg';
import hotDishIcon from '../../../../assets/ui-images/inst-hot-dish-icon.svg';
import saladIcon from '../../../../assets/ui-images/inst-salad-icon.svg';
import dessertIcon from '../../../../assets/ui-images/inst-dessert-icon.svg';
import wineIcon from '../../../../assets/ui-images/inst-wine-icon.svg';
import starIcon from '../../../../assets/ui-images/inst-star-icon.svg';

// imported types
import { CardDataTypes } from '../../../../types/institutesSliderTypes/cardTypes';

import classes from './instituteCardInfo.module.css';

const InstituteCardInfo: FC<CardDataTypes> = ({
  photo,
  logo,
  title,
  instType,
  location,
  time,
  phone,
  hotDisPrice,
  saladPrice,
  dessertPrice,
  winePrice,
  stars,
  isActive,
  isContentBlack,
}) => {
  return (
    <div
      style={{ color: isContentBlack ? 'black' : 'white' }}
      className={classes.info}
    >
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.title_container}>
          <h4>{title}</h4>
          <p>{instType}</p>
        </div>
      </div>
      <div className={classes.info_content}>
        <div>
          <img src={locationIcon} alt="locaiton icon" />
          <p>{location}</p>
        </div>
        <div>
          {/* <img src={clockIcon} alt="clock icon" /> */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 3V6.75L9 8M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
              stroke={isContentBlack ? 'black' : 'white'}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{time}</p>
        </div>
        <div>
          <img src={phoneIcon} alt="phone icon" />
          <p>{phone}</p>
        </div>
      </div>
      <div className={classes.prices}>
        <div>
          <p>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99853 16.0005C10.8587 16.0005 13.9971 12.9896 13.9971 9.28631C13.9971 9.02662 13.7774 8.81586 13.5067 8.81586C13.236 8.81586 13.0163 9.02662 13.0163 9.28631C13.0163 12.4703 10.3173 15.0596 6.99853 15.0596C3.84448 15.0596 1.25142 12.7224 1.00035 9.75675H6.99853C7.26921 9.75675 7.4889 9.54599 7.4889 9.28631C7.4889 9.02662 7.26921 8.81586 6.99853 8.81586H0.490368C0.219685 8.81586 0 9.02662 0 9.28631C0 12.9896 3.13835 16.0005 6.99853 16.0005Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M7.13583 11.902C6.87299 11.8418 6.60624 11.9961 6.54347 12.2482C6.4807 12.5004 6.64154 12.7563 6.90438 12.8165C7.08876 12.8579 7.27314 12.8805 7.45359 12.8805C8.05772 12.8805 8.63832 12.6547 9.08161 12.2294C9.58767 11.7439 9.82305 11.0815 9.74459 10.4116L13.8558 6.46741C14.0481 6.28299 14.0481 5.98567 13.8558 5.80126C13.6636 5.61684 13.3537 5.61684 13.1615 5.80126L8.86977 9.91858C8.85408 9.93364 8.84624 9.95246 8.83447 9.97127C8.81485 9.99386 8.79916 10.0164 8.78739 10.039C8.7717 10.0691 8.75993 10.0992 8.75208 10.1331C8.74424 10.1595 8.74032 10.1858 8.73639 10.2121C8.73247 10.246 8.73639 10.2799 8.74032 10.3138C8.74424 10.3288 8.73639 10.3476 8.74424 10.3627C8.85408 10.7993 8.7207 11.2471 8.39117 11.5633C8.05772 11.8794 7.59089 12.0074 7.13583 11.902Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M7.3006 5.12758C7.27706 5.77868 6.70823 6.25665 6.70431 6.26041C6.49639 6.42977 6.47286 6.72333 6.64546 6.9228C6.74354 7.03194 6.88084 7.08839 7.01814 7.08839C7.13191 7.08839 7.24175 7.05076 7.3359 6.97549C7.37121 6.94538 8.23426 6.23783 8.27741 5.16898C8.30879 4.48025 7.99888 3.82163 7.36336 3.21193C6.93184 2.79794 6.72 2.38019 6.73569 1.9662C6.75923 1.31886 7.32021 0.844656 7.33198 0.829602C7.53597 0.660242 7.56343 0.366685 7.3869 0.167217C7.21429 -0.0322518 6.90438 -0.0548331 6.69646 0.110763C6.66116 0.140872 5.80203 0.84842 5.75496 1.91727C5.72357 2.606 6.03349 3.26462 6.669 3.87432C7.10445 4.29584 7.31629 4.71359 7.3006 5.12758Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M4.40546 5.12758C4.38193 5.77868 3.8131 6.25665 3.80918 6.26041C3.60126 6.42977 3.57772 6.72333 3.75033 6.9228C3.84841 7.03194 3.98571 7.08839 4.12301 7.08839C4.23678 7.08839 4.34662 7.05076 4.44077 6.97549C4.47608 6.94538 5.33912 6.23783 5.38228 5.16898C5.41366 4.48025 5.10375 3.82163 4.46823 3.21193C4.03671 2.79794 3.82487 2.38019 3.84056 1.9662C3.8641 1.31886 4.42508 0.844656 4.43685 0.829602C4.64084 0.660242 4.6683 0.366685 4.49177 0.167217C4.31916 -0.0322518 4.00925 -0.0548331 3.80133 0.110763C3.76602 0.140872 2.9069 0.84842 2.85982 1.91727C2.82844 2.606 3.13835 3.26462 3.77387 3.87432C4.20932 4.29584 4.42116 4.71359 4.40546 5.12758Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
            </svg>

            <span>~{hotDisPrice} с</span>
          </p>
          <p>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5369 0.256834C17.147 0.256834 16.8315 0.588576 16.8315 0.998729L16.8287 11.6235C16.8287 11.8316 16.9892 12.0005 17.1871 12.0005C17.3849 12.0005 17.5455 11.8316 17.5455 11.6235V8.7464C18.1591 8.36641 20 7.0877 20 5.42899C19.9971 3.68282 18.8817 0.256834 17.5369 0.256834ZM17.5427 7.85673L17.5369 1.01079C18.1362 1.01079 19.2803 3.65266 19.2803 5.42899C19.2803 6.40009 18.2796 7.33198 17.5427 7.85673Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M3.16846 3.01331V0.633813C3.16846 0.425721 3.00789 0.256834 2.81004 0.256834C2.61219 0.256834 2.45161 0.425721 2.45161 0.633813V3.01331C2.45161 3.51695 2.06165 3.9271 1.5828 3.9271C1.10394 3.9271 0.716846 3.51695 0.716846 3.01331V0.633813C0.716846 0.425721 0.556272 0.256834 0.358423 0.256834C0.160573 0.256834 0 0.425721 0 0.633813V3.01331C0 3.80345 0.524731 4.46392 1.22724 4.63582V11.6235C1.22724 11.8316 1.38781 12.0005 1.58566 12.0005C1.78351 12.0005 1.94409 11.8316 1.94409 11.6235V4.63582C2.64373 4.46392 3.16846 3.80345 3.16846 3.01331Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M1.58566 3.39028C1.78351 3.39028 1.94409 3.2214 1.94409 3.01331V0.633813C1.94409 0.425721 1.78351 0.256834 1.58566 0.256834C1.38781 0.256834 1.22724 0.425721 1.22724 0.633813V3.01331C1.22724 3.2214 1.38495 3.39028 1.58566 3.39028Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M9.99857 10.9178C12.8602 10.9178 15.1885 8.46895 15.1885 5.45915C15.1885 2.44935 12.8602 0.000488281 9.99857 0.000488281C7.13692 0.000488281 4.8086 2.44935 4.8086 5.45915C4.8086 8.46895 7.13692 10.9178 9.99857 10.9178ZM9.99857 0.754447C12.4645 0.754447 14.4717 2.86553 14.4717 5.45915C14.4717 8.05276 12.4645 10.1638 9.99857 10.1638C7.53262 10.1638 5.52545 8.05276 5.52545 5.45915C5.52545 2.86553 7.53262 0.754447 9.99857 0.754447Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M9.99857 9.75068C12.2495 9.75068 14.0789 7.82658 14.0789 5.45915C14.0789 3.09172 12.2495 1.16762 9.99857 1.16762C7.74767 1.16762 5.91828 3.09172 5.91828 5.45915C5.91828 7.82658 7.74767 9.75068 9.99857 9.75068ZM9.99857 1.92157C11.8538 1.92157 13.362 3.5079 13.362 5.45915C13.362 7.41039 11.8538 8.99672 9.99857 8.99672C8.14337 8.99672 6.63513 7.41039 6.63513 5.45915C6.63513 3.5079 8.14337 1.92157 9.99857 1.92157Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
            </svg>

            <span>~{saladPrice} c</span>
          </p>
        </div>
        <div>
          <p>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9265 9.78503C11.8618 9.70863 11.7634 9.66406 11.6591 9.66406H10.7931L10.9637 9.37178C11.2324 8.91157 11.2219 8.36766 10.9358 7.91675C10.6496 7.46585 10.144 7.19666 9.58331 7.19666H9.38552C9.44394 6.86257 9.37686 6.51672 9.18412 6.21304C8.89797 5.76216 8.39233 5.49297 7.83162 5.49297H7.43304C7.683 5.20185 7.83306 4.83263 7.83306 4.43116C7.83306 3.60366 7.19702 2.91279 6.35814 2.76254C6.38204 2.27669 6.55352 1.0841 7.63731 0.607195C7.80766 0.532226 7.88075 0.342382 7.80058 0.183101C7.72043 0.023851 7.51736 -0.0445552 7.34701 0.0304135C5.89853 0.667757 5.69593 2.16598 5.67441 2.76232C4.83493 2.9121 4.19832 3.60319 4.19832 4.43113C4.19832 4.83266 4.34838 5.20185 4.59834 5.49294H4.16834C3.60759 5.49294 3.10199 5.76213 2.81584 6.213C2.6231 6.51669 2.55602 6.86254 2.61444 7.19663H2.41665C1.85591 7.19663 1.35034 7.46582 1.06415 7.91672C0.778001 8.36763 0.767573 8.91156 1.03625 9.37175L1.2069 9.66403H0.340882C0.236674 9.66403 0.138248 9.7086 0.073544 9.785C0.00890694 9.86141 -0.0148223 9.96125 0.00914082 10.0561L1.44967 15.7546C1.486 15.8984 1.62333 16 1.78138 16H10.2186C10.3767 16 10.514 15.8984 10.5503 15.7546L11.9909 10.0561C12.0148 9.96128 11.9911 9.86144 11.9265 9.78503ZM6.01571 3.36932C6.64189 3.36932 7.1513 3.84566 7.1513 4.43113C7.1513 5.0166 6.64186 5.49294 6.01571 5.49294C5.38952 5.49294 4.88011 5.0166 4.88011 4.43113C4.88011 3.84566 5.38952 3.36932 6.01571 3.36932ZM3.40212 6.53835C3.56424 6.28291 3.85067 6.13041 4.16837 6.13041H7.83166C8.0886 6.13041 8.32502 6.23025 8.49186 6.40357H6.73828C6.55005 6.40357 6.39741 6.54625 6.39741 6.72229C6.39741 6.89832 6.55005 7.041 6.73828 7.041H8.71963C8.71428 7.09338 8.70376 7.14547 8.68758 7.19663H3.31248C3.24313 6.97744 3.27338 6.74125 3.40212 6.53835ZM1.6505 8.24203C1.81263 7.98657 2.09902 7.8341 2.41672 7.8341H9.58331C9.90098 7.8341 10.1874 7.9866 10.3495 8.24203C10.5117 8.49747 10.5176 8.80563 10.3654 9.06631L10.0164 9.664H1.98361L1.77272 9.30275H3.94234C4.13057 9.30275 4.28321 9.16006 4.28321 8.98403C4.28321 8.808 4.13057 8.66532 3.94234 8.66532H1.52494C1.52524 8.51935 1.56695 8.37369 1.6505 8.24203ZM2.05109 15.3626L0.771717 10.3015H3.65772L4.12325 15.3626H2.05109ZM7.19254 15.3626H4.80745L4.34193 10.3015H7.65807L7.19254 15.3626ZM9.94894 15.3626H7.87678L8.3423 10.3015H11.2283L9.94894 15.3626Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M5.32458 8.66535H5.13609C4.94786 8.66535 4.79522 8.80803 4.79522 8.98407C4.79522 9.1601 4.94786 9.30278 5.13609 9.30278H5.32458C5.51281 9.30278 5.66545 9.1601 5.66545 8.98407C5.66545 8.80803 5.51281 8.66535 5.32458 8.66535Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
            </svg>
            <span>~{dessertPrice} с</span>
          </p>
          <p className={classes.prices_wine}>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49084 9.6941V13.9572H3.73523C3.45418 13.9572 3.22607 14.1908 3.22607 14.4786C3.22607 14.7664 3.45418 15 3.73523 15H8.26477C8.54583 15 8.77393 14.7664 8.77393 14.4786C8.77393 14.1908 8.54583 13.9572 8.26477 13.9572H6.50917V9.6941C9.58045 9.42714 12 6.78671 12 3.57481C12 2.38598 11.666 1.23053 11.0387 0.237764C11.0306 0.221079 11.0143 0.212736 11.002 0.200222C10.9817 0.171023 10.9572 0.145996 10.9287 0.125139C10.9043 0.104283 10.8758 0.0875973 10.8473 0.0709121C10.8187 0.0542269 10.7902 0.041713 10.7617 0.0333704C10.7291 0.0208565 10.6925 0.0166852 10.6599 0.0125139C10.6436 0.0083426 10.6273 0 10.611 0H1.33198C1.07536 0 0.87169 0.200222 0.835031 0.450501C0.289206 1.39739 0 2.46941 0 3.57481C0 6.78671 2.41955 9.42714 5.49084 9.6941ZM1.67821 1.04283H10.3218C10.7536 1.81034 10.9817 2.68215 10.9817 3.57481C10.9817 6.38626 8.74542 8.67631 6 8.67631C3.25458 8.67631 1.01833 6.38626 1.01833 3.57481C1.01833 2.68215 1.24644 1.81034 1.67821 1.04283Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
              <path
                d="M6 7.9505C8.35438 7.9505 10.2688 5.98999 10.2688 3.57898C10.2688 3.20356 10.224 2.83231 10.1303 2.47358C10.0815 2.29004 9.92261 2.16073 9.73523 2.16073H2.26069C2.07332 2.16073 1.91446 2.29004 1.86558 2.47358C1.77597 2.82814 1.73116 3.19939 1.73116 3.57481C1.73116 5.98582 3.64562 7.9505 6 7.9505ZM5.97149 7.05367C4.1833 7.05367 2.72912 5.56452 2.72912 3.73331C2.72912 3.50389 2.91242 3.31618 3.13646 3.31618C3.36049 3.31618 3.54379 3.50389 3.54379 3.73331C3.54379 5.1015 4.63136 6.21941 5.97149 6.21941C6.19552 6.21941 6.37882 6.40712 6.37882 6.63654C6.37882 6.86596 6.19552 7.05367 5.97149 7.05367Z"
                fill={isContentBlack ? 'black' : 'white'}
              />
            </svg>
            <span>~{winePrice} c</span>
          </p>
        </div>
      </div>
      <div className={classes.stars}>
        <div className={classes.stars_container}>
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </div>
        <p>{stars}</p>
      </div>
    </div>
  );
};

export default InstituteCardInfo;
