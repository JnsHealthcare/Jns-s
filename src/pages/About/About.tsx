import React from 'react';
import './About.scss';

interface LimeProps {
  logoUrl: string;
}

const Lime: React.FC<LimeProps> = ({ logoUrl }) => {
  return (
    <div className="lime-container">
      <header>
        <img className="logo" src={logoUrl} alt="Lime 로고" />
        <h1>우리의 스토리</h1>
      </header>

      <section className="section">
        <h2>스토리 내용</h2>
        {/* 사진 또는 팀 사진 추가 */}
        <p>
          라임은 2010년에 창립되었습니다. 우리는 새로운 비전과 열정을 가진
          팀으로 시작하여 혁신적인 모빌리티 솔루션을 만들고자 했습니다. 우리의
          목표는 사람들이 더욱 편리하고 친환경적인 이동 방식을 즐길 수 있도록
          하는 것입니다.
        </p>
      </section>

      <section className="section">
        <h2>우리의 가치</h2>
        {/* 가치와 관련된 이미지 추가 */}
        <p>우리는 다음 가치를 소중히 여깁니다.</p>
        <ul>
          <li>
            지속 가능성: 우리는 지속 가능한 모빌리티 솔루션을 개발하여 도시의
            대기 오염과 교통 혼잡을 줄이고자 합니다.
          </li>
          <li>
            혁신: 우리는 새로운 기술과 아이디어를 적극적으로 도입하여 모빌리티
            산업을 변화시키고 선도합니다.
          </li>
          <li>
            사용자 중심: 우리의 서비스는 항상 사용자의 편의와 만족을 최우선으로
            생각합니다.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>우리의 서비스</h2>
        {/* 서비스와 관련된 이미지 추가 */}
        <p>
          라임은 고객들에게 혁신적이고 편리한 모빌리티 서비스를 제공합니다.
          우리의 주요 서비스는 다음과 같습니다.
        </p>
        <ul>
          <li>
            전기 킥보드 대여: 라임 앱을 통해 전기 킥보드를 손쉽게 대여할 수
            있습니다.
          </li>
          {/* 추가 서비스 설명 */}
        </ul>
      </section>
    </div>
  );
};

export default Lime;
