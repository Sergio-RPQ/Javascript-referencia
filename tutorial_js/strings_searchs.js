/*
    String indexOf()
    String lastIndexOf()
    String search()
    String match()
    String matchAll()
    String includes()
    String startsWith()
    String endsWith()
*/

// Métodos
    //indexOf() retorna o índice da primeira ocorrência da substring na string
    let text1 = "Please locate where 'locate' occurs!";
    let index1 = text1.indexOf("locate");
    console.log(index1);

    //lastIndexOf() retorna o índice da última ocorrência da substring na string
    let text2 = "Please locate where 'locate' occurs!";
    let index2 = text2.lastIndexOf("locate");
    console.log(index2);

    //search() busca uma substring na string ou utilizando regex
    let text3 = "Please locate where 'locate' occurs!";
    console.log(text3.search("locate"));

    let text = "Please locate where 'locate' occurs!";
    console.log(text.search(/locate/));


    
