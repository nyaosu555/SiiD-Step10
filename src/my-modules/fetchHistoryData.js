export const fetchHistoryData = async (db, collection, getDocs) => {
    let tags = '';
  
    // reportsコレクションのデータを取得
    const querySnapshot = await getDocs(collection(db, "reports"));
  
    // データをテーブルの表形式に合わせてHTMLに挿入
    querySnapshot.forEach((doc) => {
      console.log('L31: doc', doc);
      console.log(`${doc.id} => ${doc.data()}`);
      tags += `<tr>
                  <td>${doc.data().date}</td>
                  <td>${doc.data().name}</td>
                  <td>${doc.data().work}</td>
                  <td>${doc.data().comment}</td>
               </tr>`
    });
    document.getElementById('js-history').innerHTML = tags;
  };