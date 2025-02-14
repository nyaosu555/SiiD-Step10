// Cloud Firestoreにデータを送信する
export const submitData = async (e, db, collection, addDoc) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    try{
      const docRef = await addDoc(collection(db, 'reports'), {
        date: new Date(),
        name: formData.get('name'),
        work: formData.get('work'),
        comment: formData.get('comment'),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch(e) {
      console.log('Error adding document: ', e);
    }
  }