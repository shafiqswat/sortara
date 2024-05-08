/** @format */

import style from "../../../style/Walkthrough/WalkthroughCard.module.css";
interface Post {
  firstPara: string;
  secondPara: string;
  firstImage: string;
  secondImage: string;
  firstParaColor: string;
  firstParaFontSize: string;
  firstParaFontWeight: string;
}

export default function WalkthroughCard({ post }: { post: Post }) {
  const handleStyle = {
    color: post.firstParaColor,
    fontSize: post.firstParaFontSize,
    fontWeight: post.firstParaFontWeight,
  };

  return (
    <div className={style.cardContent}>
      <img
        src={post.firstImage}
        alt='suggested'
        className={style.suggested}
      />
      <div>
        <p className={style.trendyPara}>{post.firstPara}</p>
        <p
          className={style.suggestPara}
          style={handleStyle}>
          <img
            src={post.secondImage}
            alt='suggestItem'
          />
          {post.secondPara}
        </p>
      </div>
    </div>
  );
}
