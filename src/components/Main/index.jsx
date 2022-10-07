import styles from "./Main.module.scss";
import Sidebar from "../Sidebar";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main className={styles.main}>
      <div className="bar">
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.contentWrapper}>
                <div className={styles.title}>
                  <h1>Хлопок / Состав и строение</h1>
                </div>
                <div className={styles.text}>
                  <p>
                    <i>Хло́пок</i> — волокно растительного происхождения,
                    покрывающее семена хлопчатника; важнейшее и наиболее дешёвое
                    из распространённых растительных волокон. Волокно хлопка
                    представляет собой одну растительную клетку, развивающуюся
                    из кожуры семени. Толщина одного волокна — 15—25 мкм; в
                    зависимости от длины волокна (от 5 до 60 мм), изготовленную
                    из него пряжу классифицируют как коротковолокнистую,
                    средневолокнистую и тонковолокнистую и подвергают различной
                    обработке. По мере созревания волокна, растут отложения
                    целлюлозы, в результате чего прочность волокна возрастает.
                    По химическому составу на 95 % состоит из целлюлозы,
                    остальные 5 % — жировые и минеральные примеси.
                    <i>
                      <br />
                      Свойства{" "}
                    </i>
                    <br />- Обладает высокой гигроскопичностью (способностью
                    впитывать влагу). <br />
                    - Волокно при набухании увеличивается примерно на 40 % по
                    объёму. <br />
                    - По прочности сравним с шёлком. <br />
                    Как и все натуральные ткани, чувствителен к свету — после
                    940 часов воздействия солнечных лучей прочность снижается
                    вдвое.
                    <br />
                    - Более, чем шёлк, чувствителен к длительному воздействию
                    высоких температур — после трёх суток нагревания до 150 °C
                    прочность уменьшается вдвое Термопластичен — способен
                    «запоминать» форму после нагревания (другими словами —
                    поддаётся утюжке), что позволяет добавлять хлопок в
                    костюмные ткани из синтетических волокон для улучшения
                    свойств. <br />- Обладает хорошими теплозащитными
                    характеристиками за счёт полого строения волокна. Ткани без
                    обработки легко сминаются и истираются; устойчивость к
                    истиранию решается добавлением синтетических тканей
                    (капрона); повышенная сминаемость устраняется после так
                    называемой несминаемой отделки мочевиноформальдегидной или
                    меламинформальдегидной смолой. <br />
                    - Как и другие натуральные волокна, не растворяется в
                    органических растворителях (например, в муравьиной кислоте,
                    уксусе, спирте), что позволяет использовать эти
                    легкодоступные реактивы для очистки сложных пятен на
                    хлопковых тканях в домашних условиях. Однако, чувствителен к
                    действию неорганических кислот и щелочей; обработка щелочами
                    (например, едким натром) применяется при изготовлении ткани
                    (см. Мерсеризация). <br />
                    - Чувствителен к деятельности микроорганизмов (другими
                    словами — гниёт). <br />- При горении хлопок источает запах
                    жжёной бумаги[4]. Рекомендуемая температура влажно-тепловой
                    обработки — 130 °C.
                  </p>
                  <div className={styles.itemWrapper}>
                    <div className={styles.item}>
                      <img
                        src="./images/cottonImages/cotton1.jpg"
                        alt="cotton"
                      />
                    </div>
                    <div className={styles.item}>
                      <img
                        src="./images/cottonImages/cotton2.jpg"
                        alt="cotton"
                      />
                    </div>
                    <div className={styles.item}>
                      <img
                        src="./images/cottonImages/cotton3.jpg"
                        alt="cotton"
                      />
                    </div>
                    <div className={styles.item}>
                      <img
                        src="./images/cottonImages/cotton4.jpg"
                        alt="cotton"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/lab-1"
            element={
              <div id="el" className={styles.contentWrapper}>
                <div className={styles.title}>
                  <h1>Ассортимент и структура нетканных материалов</h1>
                </div>
                <div className={styles.text}>
                  <div className={styles.itemWrapper}>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/1.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/2.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/3.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/4.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/5.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/6.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/7.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/8.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/9.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/10.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/11.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/12.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/13.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/14.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/15.jpg" alt="material" />
                    </div>
                    <div className={`${styles.item} ${styles.firstLab}`}>
                      <img src="./images/lab1/16.jpg" alt="material" />
                    </div>
                  </div>
                  <p></p>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
