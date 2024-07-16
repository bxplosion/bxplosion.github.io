var posts=["2024/07/01/hello-world/","2024/06/14/test/","2024/07/01/从变分原理到变分方程之FEniCS求解/","2024/07/01/时变动力学问题之FEniCS求解/","2024/07/01/有限元法-能量原理/","2024/07/01/有限元法-入门/","2024/07/01/有限元法求解偏微分方程之FEniCS入门讲解/","2024/06/14/混合形式泊松方程之FEniCS求解/","2024/07/01/非线性变分问题之FEniCS求解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };