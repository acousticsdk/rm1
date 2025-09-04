import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect, Mask, Circle, Stop, LinearGradient as SvgLinearGradient } from 'react-native-svg';

export function ScenarioIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 123 123" fill="none">
      <Defs>
        <Mask id="mask0_259_3185" masktype="luminance" maskUnits="userSpaceOnUse" x="-1" y="0" width="124" height="123">
          <Path d="M122.507 0H-0.000488281V122.508H122.507V0Z" fill="white"/>
        </Mask>
      </Defs>
      <G mask="url(#mask0_259_3185)">
        <Path 
          d="M40.8354 10.2109V25.5244" 
          stroke={color} 
          strokeWidth="7.65674" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M81.6714 10.2109V25.5244" 
          stroke={color} 
          strokeWidth="7.65674" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M35.731 66.3594H76.5669" 
          stroke={color} 
          strokeWidth="7.65674" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M35.731 86.7734H61.2534" 
          stroke={color} 
          strokeWidth="7.65674" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M81.6714 17.8672C98.6693 18.786 107.194 25.2687 107.194 49.2598V80.8056C107.194 101.836 102.089 112.351 76.5669 112.351H45.9399C20.4175 112.351 15.313 101.836 15.313 80.8056V49.2598C15.313 25.2687 23.8375 18.837 40.8354 17.8672H81.6714Z" 
          stroke={color} 
          strokeWidth="7.65674" 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export function MontageIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 119 118" fill="none">
      <Defs>
        <ClipPath id="clip0_259_3196">
          <Rect width="117.492" height="117.492" fill="white" transform="translate(0.671631 0.507812)"/>
        </ClipPath>
        <Mask id="mask0_259_3196" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="119" height="118">
          <Path d="M118.164 0.507812H0.671631V118H118.164V0.507812Z" fill="white"/>
        </Mask>
      </Defs>
      <G clipPath="url(#clip0_259_3196)">
        <G mask="url(#mask0_259_3196)">
          <Path 
            d="M110.87 93.5859L105.289 94.8587C101.275 95.7889 98.1419 98.922 97.2117 102.936L95.89 108.517C95.7431 109.105 94.9108 109.105 94.764 108.517L93.4911 102.936C92.561 98.922 89.4279 95.7889 85.4136 94.8587L79.8327 93.5369C79.2452 93.3901 79.2452 92.5578 79.8327 92.411L85.4136 91.1381C89.4279 90.208 92.561 87.0749 93.4911 83.0605L94.8129 77.4797C94.9598 76.8922 95.792 76.8922 95.9389 77.4797L97.2117 83.0605C98.1419 87.0749 101.275 90.208 105.289 91.1381L110.87 92.4599C111.458 92.6068 111.458 93.439 110.87 93.5859Z" 
            stroke={color} 
            strokeWidth="7.34326" 
            strokeMiterlimit="10"
          />
          <Path 
            d="M55.8917 76.5465H42.3803C36.163 76.5465 31.1206 71.5041 31.1206 65.2868V51.7752C31.1206 45.558 36.163 40.5156 42.3803 40.5156H55.8917C62.109 40.5156 67.1514 45.558 67.1514 51.7752V65.2868C67.1514 71.5041 62.109 76.5465 55.8917 76.5465Z" 
            stroke={color} 
            strokeWidth="7.34326" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M67.1533 54.024V63.0318L77.1402 69.6897C78.6088 70.6688 80.6649 69.5918 80.6649 67.7804V49.1776C80.6649 47.3663 78.6578 46.2893 77.1402 47.2684L67.1533 53.9751V54.024Z" 
            stroke={color} 
            strokeWidth="7.34326" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M67.1523 107.481H34.2546C19.5191 107.481 7.52515 95.5355 7.52515 80.7511V36.2998C7.52515 21.5154 19.4702 9.57031 34.2546 9.57031H77.5308C92.2663 9.57031 104.26 21.5154 104.26 36.2998V60.7285" 
            stroke={color} 
            strokeWidth="7.34326" 
            strokeMiterlimit="10" 
            strokeLinecap="round"
          />
        </G>
      </G>
    </Svg>
  );
}

export function DesignIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 119 118" fill="none">
      <Defs>
        <ClipPath id="clip0_259_3209">
          <Rect width="117.492" height="117.492" fill="white" transform="translate(0.836182 0.507812)"/>
        </ClipPath>
        <Mask id="mask0_259_3209" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="119" height="118">
          <Path d="M118.328 0.507812H0.836182V118H118.328V0.507812Z" fill="white"/>
        </Mask>
        <Mask id="mask1_259_3209" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="119" height="118">
          <Path d="M118.328 0.507812H0.836182V118H118.328V0.507812Z" fill="white"/>
        </Mask>
      </Defs>
      <G clipPath="url(#clip0_259_3209)">
        <G mask="url(#mask0_259_3209)">
          <G mask="url(#mask1_259_3209)">
            <Path 
              d="M54.539 10.2969H44.7478C20.2703 10.2969 10.4792 20.0879 10.4792 44.5654V73.9385C10.4792 98.416 20.2703 108.207 44.7478 108.207H74.121C98.5985 108.207 108.39 98.416 108.39 73.9385V64.1475" 
              stroke={color} 
              strokeWidth="7.34326" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <Path 
              d="M107.95 17.9349C101.928 32.9642 86.8011 53.4273 74.1707 63.561L66.4358 69.7293C65.4567 70.4636 64.4776 71.0511 63.3516 71.4917C63.3516 70.7574 63.3027 70.0231 63.2048 69.2398C62.7642 65.9598 61.2955 62.8756 58.652 60.281C55.9594 57.5885 52.7284 56.0708 49.3996 55.6303C48.6164 55.5813 47.8331 55.5323 47.0498 55.5813C47.4904 54.3574 48.1268 53.2315 48.959 52.3013L55.1272 44.5665C65.2609 31.9361 85.7731 16.7111 100.753 10.6896C103.054 9.8084 105.306 10.4938 106.726 11.9135C108.194 13.3821 108.88 15.6341 107.95 17.9349Z" 
              stroke={color} 
              strokeWidth="7.34326" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <Path 
              d="M63.3993 71.4541C63.3993 75.7622 61.7348 79.8744 58.6506 83.0075C56.2518 85.4063 53.0208 87.0708 49.1532 87.5603L39.509 88.5884C34.2708 89.1759 29.767 84.7209 30.3544 79.3848L31.3825 69.7407C32.3126 61.1735 39.4601 55.6906 47.0971 55.5437C47.8804 55.4948 48.6636 55.5437 49.4469 55.5927C52.776 56.0333 56.007 57.5509 58.6996 60.2434C61.3431 62.887 62.8118 65.9222 63.2524 69.2022C63.3503 69.9855 63.3993 70.7687 63.3993 71.4541Z" 
              stroke={color} 
              strokeWidth="7.34326" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <Path 
              d="M78.2822 59.1402C78.2822 48.9083 70.0088 40.5859 59.7283 40.5859" 
              stroke={color} 
              strokeWidth="7.34326" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export function ShootingIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 122 122" fill="none">
      <Defs>
        <ClipPath id="clip0_259_3224">
          <Rect width="121.492" height="121.492" fill="white" transform="translate(0.000488281 0.507812)"/>
        </ClipPath>
        <Mask id="mask0_259_3224" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="122" height="122">
          <Path d="M121.493 0.507812H0.000488281V122H121.493V0.507812Z" fill="white"/>
        </Mask>
      </Defs>
      <G clipPath="url(#clip0_259_3224)">
        <G mask="url(#mask0_259_3224)">
          <Path 
            d="M54.4712 83.3656C52.3451 83.3656 50.3708 82.8594 48.599 81.8469C44.5493 79.5183 42.2207 74.7599 42.2207 68.7359V53.7519C42.2207 47.7785 44.5493 42.9694 48.599 40.6408C52.6488 38.3122 57.9135 38.6665 63.1275 41.7038L76.1373 49.1959C81.3007 52.1826 84.2874 56.5867 84.2874 61.2439C84.2874 65.9011 81.3007 70.3052 76.1373 73.2919L63.1275 80.7839C60.1915 82.505 57.2048 83.3656 54.4712 83.3656ZM54.5218 46.7154C53.7119 46.7154 53.0032 46.8673 52.4463 47.2216C50.8265 48.1834 49.8646 50.5626 49.8646 53.7519V68.7359C49.8646 71.9251 50.7758 74.3043 52.4463 75.2661C54.0662 76.2279 56.5973 75.8229 59.3815 74.2031L72.3913 66.711C75.1755 65.0911 76.7448 63.1169 76.7448 61.2439C76.7448 59.3709 75.1755 57.346 72.3913 55.7767L59.3815 48.2847C57.5591 47.2216 55.8886 46.7154 54.5218 46.7154Z" 
            fill={color}
          />
          <Path 
            d="M60.747 115.673C30.7283 115.673 6.32861 91.273 6.32861 61.2543C6.32861 31.2356 30.7283 6.83594 60.747 6.83594C90.7657 6.83594 115.165 31.2356 115.165 61.2543C115.165 91.273 90.7657 115.673 60.747 115.673ZM60.747 14.4292C34.9299 14.4292 13.9219 35.4372 13.9219 61.2543C13.9219 87.0714 34.9299 108.079 60.747 108.079C86.5641 108.079 107.572 87.0714 107.572 61.2543C107.572 35.4372 86.5641 14.4292 60.747 14.4292Z" 
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
}

export function SmmIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 121 121" fill="none">
      <Defs>
        <ClipPath id="clip0_259_3321">
          <Rect width="120.359" height="120.359" fill="white" transform="translate(0.0737305 0.53125)"/>
        </ClipPath>
        <Mask id="mask0_259_3321" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="121" height="121">
          <Path d="M120.433 0.53125H0.0737305V120.891H120.433V0.53125Z" fill="white"/>
        </Mask>
      </Defs>
      <G clipPath="url(#clip0_259_3321)">
        <G mask="url(#mask0_259_3321)">
          <Path 
            d="M45.2085 110.862H75.2983C100.373 110.862 110.403 100.832 110.403 75.7572V45.6673C110.403 20.5924 100.373 10.5625 75.2983 10.5625H45.2085C20.1336 10.5625 10.1036 20.5924 10.1036 45.6673V75.7572C10.1036 100.832 20.1336 110.862 45.2085 110.862Z" 
            stroke={color} 
            strokeWidth="7.52246" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M60.2535 78.2611C69.9474 78.2611 77.8059 70.4026 77.8059 60.7087C77.8059 51.0147 69.9474 43.1562 60.2535 43.1562C50.5595 43.1562 42.701 51.0147 42.701 60.7087C42.701 70.4026 50.5595 78.2611 60.2535 78.2611Z" 
            stroke={color} 
            strokeWidth="7.52246" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M88.5184 35.6328H88.5765" 
            stroke={color} 
            strokeWidth="10.0299" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
}

export function AdsIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 116 116" fill="none">
      <Path 
        d="M106.022 75.2429L90.2264 16.4057C88.5091 10.0087 80.6469 7.65189 75.6823 12.0458L65.7266 20.8569C54.6478 30.662 41.4341 37.758 27.1316 41.583C15.1595 44.7847 8.06427 57.1026 11.2721 69.0516C14.4801 81.0006 26.7954 88.1272 38.7675 84.9254C53.0699 81.1002 68.0683 80.6512 82.5751 83.6144L95.6108 86.2767C102.112 87.6044 107.739 81.6398 106.022 75.2429Z" 
        stroke={color} 
        strokeWidth="9.58333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M37.8973 38.5469L56.022 105.63" 
        stroke={color} 
        strokeWidth="9.58333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ForShootingIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 125 124" fill="none">
      <Defs>
        <ClipPath id="clip0_259_3337">
          <Rect width="123.311" height="123.311" fill="white" transform="translate(0.92688 0.0625)"/>
        </ClipPath>
        <Mask id="mask0_259_3337" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="125" height="124">
          <Path d="M124.238 0.0625H0.92688V123.373H124.238V0.0625Z" fill="white"/>
        </Mask>
      </Defs>
      <G clipPath="url(#clip0_259_3337)">
        <G mask="url(#mask0_259_3337)">
          <Path 
            d="M47.1684 113.095H77.9961C103.686 113.095 113.962 102.819 113.962 77.1293V46.3016C113.962 20.6118 103.686 10.3359 77.9961 10.3359H47.1684C21.4787 10.3359 11.2028 20.6118 11.2028 46.3016V77.1293C11.2028 102.819 21.4787 113.095 47.1684 113.095Z" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M36.3274 13.0078V110.423" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M87.7068 13.0078V110.423" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M36.3275 35.8672H13.9774" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M36.3275 61.7188H11.3571" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M36.3273 87.2422H13.6689" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M113.397 35.8672H91.0468" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M113.397 61.7188H88.4263" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M88.1178 61.7188H31.6002" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <Path 
            d="M113.397 87.2422H90.7382" 
            stroke={color} 
            strokeWidth="7.70692" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
}

export function ItIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 132 131" fill="none">
      <Defs>
        <Mask id="mask0_259_3356" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="132" height="131">
          <Path d="M131.028 0.429688H0.465332V130.992H131.028V0.429688Z" fill="white"/>
        </Mask>
      </Defs>
      <G mask="url(#mask0_259_3356)">
        <Path 
          d="M37.9471 86.1032C36.4239 86.1032 35.0094 85.2872 34.3022 83.8728C33.2686 81.8599 34.0846 79.4119 36.1519 78.3783C40.8847 76.039 44.9104 72.4485 47.7937 68.0965C48.7729 66.6276 48.7729 64.778 47.7937 63.3092C44.856 58.9571 40.8303 55.3666 36.1519 53.0274C34.0846 52.0482 33.2686 49.6002 34.3022 47.5329C35.2814 45.5201 37.7295 44.7041 39.7423 45.7377C45.7264 48.7297 50.8401 53.245 54.5394 58.7939C57.3138 62.9828 57.3138 68.4229 54.5394 72.6117C50.8401 78.1606 45.7264 82.6759 39.7423 85.668C39.1983 85.94 38.5455 86.1032 37.9471 86.1032Z" 
          fill={color}
        />
        <Path 
          d="M92.9471 86.1055H71.1866C68.9562 86.1055 67.1066 84.2558 67.1066 82.0254C67.1066 79.7949 68.9562 77.9453 71.1866 77.9453H92.9471C95.1775 77.9453 97.0271 79.7949 97.0271 82.0254C97.0271 84.2558 95.1775 86.1055 92.9471 86.1055Z" 
          fill={color}
        />
        <Path 
          d="M82.0668 124.189H49.4262C19.8864 124.189 7.26538 111.568 7.26538 82.028V49.3874C7.26538 19.8476 19.8864 7.22656 49.4262 7.22656H82.0668C111.607 7.22656 124.228 19.8476 124.228 49.3874V82.028C124.228 111.568 111.607 124.189 82.0668 124.189ZM49.4262 15.3867C24.3473 15.3867 15.4255 24.3085 15.4255 49.3874V82.028C15.4255 107.107 24.3473 116.029 49.4262 116.029H82.0668C107.146 116.029 116.067 107.107 116.067 82.028V49.3874C116.067 24.3085 107.146 15.3867 82.0668 15.3867H49.4262Z" 
          fill={color}
        />
      </G>
    </Svg>
  );
}

export function HomeIcon({ size = 24, color = '#9DB2CE' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      <Defs>
        <Mask id="mask0_259_977" masktype="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="53" height="52">
          <Path d="M52.001 0H0.000976562V52H52.001V0Z" fill="white"/>
        </Mask>
      </Defs>
      <G mask="url(#mask0_259_977)">
        <Path 
          d="M26 40.625C25.1117 40.625 24.375 39.8883 24.375 39V32.5C24.375 31.6117 25.1117 30.875 26 30.875C26.8883 30.875 27.625 31.6117 27.625 32.5V39C27.625 39.8883 26.8883 40.625 26 40.625Z" 
          fill={color}
        />
        <Path 
          d="M38.1338 48.8785H13.8671C9.92374 48.8785 6.32707 45.8451 5.67707 41.9668L2.7954 24.6985C2.31874 22.0118 3.6404 18.5668 5.7854 16.8551L20.8004 4.83014C23.7038 2.49014 28.2755 2.51181 31.2005 4.85181L46.2155 16.8551C48.3388 18.5668 49.6388 22.0118 49.2055 24.6985L46.3238 41.9451C45.6738 45.7801 41.9905 48.8785 38.1338 48.8785ZM25.9788 6.34681C24.8305 6.34681 23.6822 6.69348 22.8372 7.36514L7.82207 19.4118C6.60874 20.3868 5.74207 22.6401 6.00207 24.1785L8.88374 41.4251C9.27374 43.7001 11.5487 45.6285 13.8671 45.6285H38.1338C40.4522 45.6285 42.7272 43.7001 43.1172 41.4035L45.9988 24.1568C46.2372 22.6401 45.3705 20.3435 44.1788 19.3901L29.1638 7.38681C28.2972 6.69348 27.1272 6.34681 25.9788 6.34681Z" 
          fill={color}
        />
      </G>
    </Svg>
  );
}

export function ChatIcon({ size = 24, color = '#9DB2CE' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Defs>
        <ClipPath id="clip0_259_985">
          <Rect width="56" height="56" fill="white" transform="translate(0.000976562)"/>
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_259_985)">
        <Path 
          d="M56.001 0H0.000976562V56H56.001V0Z" 
          fill="white" 
          fillOpacity="0.01"
        />
        <Path 
          d="M51.3346 27.9974C51.3346 40.884 40.888 51.3307 28.0013 51.3307C21.0322 51.3307 4.66797 51.3307 4.66797 51.3307C4.66797 51.3307 4.66797 33.915 4.66797 27.9974C4.66797 15.1107 15.1147 4.66406 28.0013 4.66406C40.888 4.66406 51.3346 15.1107 51.3346 27.9974Z" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M16.334 21H37.334" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M16.334 30.3359H37.334" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M16.334 39.6641H28.0007" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export function MarketplaceIcon({ size = 24, color = '#9DB2CE' }) {
  return (
    <Svg width={size * 3} height={size * 3} viewBox="0 0 179 180" fill="none" style={{ alignSelf: 'center' }}>
      <Circle cx="89" cy="90" r="66" fill="#015FFE"/>
      <Circle cx="89" cy="90" r="64" stroke="white" strokeOpacity="0.28" strokeWidth="4"/>
      <Path 
        d="M60.2461 87.2031V101.855C60.2461 116.507 66.1199 122.381 80.7718 122.381H98.3605C113.012 122.381 118.886 116.507 118.886 101.855V87.2031" 
        stroke="white" 
        strokeWidth="4.89484" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M89.5815 89.7494C95.5532 89.7494 99.9586 84.8872 99.3712 78.9155L97.2175 57.1172H81.9782L79.7918 78.9155C79.2044 84.8872 83.6098 89.7494 89.5815 89.7494Z" 
        stroke="white" 
        strokeWidth="4.89484" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M110.173 89.7494C116.765 89.7494 121.595 84.3977 120.942 77.8387L120.028 68.8648C118.854 60.3804 115.59 57.1172 107.041 57.1172H97.0879L99.3721 79.9924C99.9269 85.3767 104.789 89.7494 110.173 89.7494Z" 
        stroke="white" 
        strokeWidth="4.89484" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M68.8267 89.7494C74.2111 89.7494 79.0733 85.3767 79.5954 79.9924L80.3133 72.7807L81.8797 57.1172H71.9268C63.3772 57.1172 60.1139 60.3804 58.9392 68.8648L58.0581 77.8387C57.4055 84.3977 62.235 89.7494 68.8267 89.7494Z" 
        stroke="white" 
        strokeWidth="4.89484" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M89.5799 106.062C84.1304 106.062 81.4219 108.771 81.4219 114.221V122.379H97.738V114.221C97.738 108.771 95.0295 106.062 89.5799 106.062Z" 
        stroke="white" 
        strokeWidth="4.89484" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function WalletIcon({ size = 24, color = '#9DB2CE' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 57 57" fill="none">
      <Path 
        d="M52.2741 28.7526V40.4193C52.2741 47.4193 47.6074 52.0859 40.6074 52.0859H17.2741C10.2741 52.0859 5.60742 47.4193 5.60742 40.4193V28.7526C5.60742 22.4059 9.43409 17.9726 15.3841 17.2259C15.9908 17.1326 16.6208 17.0859 17.2741 17.0859H40.6074C41.2141 17.0859 41.7974 17.1092 42.3574 17.2026C48.3774 17.9026 52.2741 22.3593 52.2741 28.7526Z" 
        stroke={color} 
        strokeWidth="3.36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M42.36 17.1974C41.8 17.1041 41.2167 17.0808 40.61 17.0808H17.2767C16.6234 17.0808 15.9934 17.1274 15.3867 17.2207C15.7134 16.5674 16.1801 15.9607 16.7401 15.4007L24.3234 7.79406C27.5201 4.62073 32.7 4.62073 35.8967 7.79406L39.98 11.9241C41.4734 13.3941 42.2667 15.2607 42.36 17.1974Z" 
        stroke={color} 
        strokeWidth="3.36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M52.2741 29.9141H45.2741C42.7074 29.9141 40.6074 32.0141 40.6074 34.5807C40.6074 37.1474 42.7074 39.2474 45.2741 39.2474H52.2741" 
        stroke={color} 
        strokeWidth="3.36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProfileIcon({ size = 24, color = '#9DB2CE' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 57 57" fill="none">
      <Path 
        d="M28.8796 28.7474C35.3229 28.7474 40.5462 23.5241 40.5462 17.0807C40.5462 10.6374 35.3229 5.41406 28.8796 5.41406C22.4362 5.41406 17.2129 10.6374 17.2129 17.0807C17.2129 23.5241 22.4362 28.7474 28.8796 28.7474Z" 
        stroke={color} 
        strokeWidth="3.36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M48.9236 52.0833C48.9236 43.0533 39.9402 35.75 28.8802 35.75C17.8202 35.75 8.83691 43.0533 8.83691 52.0833" 
        stroke={color} 
        strokeWidth="3.36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BankIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 58 65" fill="none">
      <Path d="M28.8391 0.835938L0.097168 16.0433V22.1263H57.581V16.0433M42.4537 28.2092V49.4995H51.5301V28.2092M0.097168 64.7069H57.581V55.5825H0.097168M24.3009 28.2092V49.4995H33.3773V28.2092M6.1481 28.2092V49.4995H15.2245V28.2092H6.1481Z" fill={color}/>
    </Svg>

  );
}

export function CryptoIcon({ size = 24, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 65 65" fill="none">
      <Path d="M32.6777 0.835938C26.3614 0.835938 20.187 2.70892 14.9353 6.21804C9.68352 9.72715 5.59027 14.7148 3.17315 20.5502C0.756025 26.3857 0.123596 32.8068 1.35583 39.0017C2.58807 45.1966 5.62963 50.887 10.0959 55.3532C14.5621 59.8195 20.2525 62.861 26.4474 64.0933C32.6423 65.3255 39.0634 64.6931 44.8989 62.276C50.7343 59.8588 55.7219 55.7656 59.2311 50.5138C62.7402 45.2621 64.6132 39.0877 64.6132 32.7714C64.6132 24.3016 61.2485 16.1787 55.2595 10.1896C49.2704 4.20056 41.1475 0.835938 32.6777 0.835938ZM21.7398 27.6351L31.0543 14.3287C31.2457 14.0802 31.4916 13.879 31.7731 13.7405C32.0545 13.602 32.364 13.53 32.6777 13.53C32.9913 13.53 33.3008 13.602 33.5823 13.7405C33.8637 13.879 34.1096 14.0802 34.3011 14.3287L43.6156 27.6351C43.9081 28.0371 44.0377 28.5349 43.9785 29.0285C43.9193 29.5221 43.6755 29.975 43.2962 30.2964L33.9817 38.2803C33.6132 38.6022 33.1404 38.7796 32.6511 38.7796C32.1617 38.7796 31.689 38.6022 31.3204 38.2803L22.0059 30.2964C21.6347 29.9678 21.4011 29.5112 21.3518 29.0179C21.3024 28.5246 21.441 28.0308 21.7398 27.6351ZM43.6688 45.3327L34.4341 53.3166C33.9485 53.7432 33.3241 53.9785 32.6777 53.9785C32.0312 53.9785 31.4069 53.7432 30.9212 53.3166L21.6866 45.3327C21.1537 44.8669 20.8276 44.2084 20.7802 43.5022C20.7328 42.796 20.9679 42.0999 21.4337 41.567C21.8996 41.0341 22.558 40.7081 23.2642 40.6607C23.9704 40.6132 24.6666 40.8483 25.1995 41.3142L32.6777 47.8609L40.1559 41.3142C40.6888 40.8483 41.3849 40.6132 42.0911 40.6607C42.7973 40.7081 43.4558 41.0341 43.9216 41.567C44.3875 42.0999 44.6225 42.796 44.5751 43.5022C44.5277 44.2084 44.2017 44.8669 43.6688 45.3327Z" fill={color}/>
    </Svg>
  );
}