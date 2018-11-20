function ispis(){
				var a = Forma.a.value;
				var b = Forma.b.value;
				var c = Forma.c.value;
				if(a == "" || b =="" || c ==""){
				alert("Niste popunili sva potrebna polja, molimo pokusajte ponovo!");
				} 
				else{
				alert("Postovani " + a + " " + b + ", Vasa poruka je uspesno poslata, trudicemo se da sto pre dobijete ogovor na Vasu e-mail adresu: " + c);
				} 
			}