var Index = 0;     // zadaje pocetnu vrednost da krece od nule
		slike(); // pozvali smo  slike () da bi prikazali prvu sliku

		function slike() {
			var i;
			var x = document.getElementsByClassName("slajd");  // uzima sve elemente iz slajda  pravi niz u njima i  stavlja ih u x.
			for (i = 0; i < x.length; i++) { // prolazi for petljom kroz sve te elemente,  pocinje od nule,  uslov i < duzine niza, 
			x[i].style.display = "none";  // stavlja im display.none sto znaci da nece biti vidljiv.
    }
		Index++;   // poslee index povecava za 1 i bice 1.
		if (Index > x.length) {Index = 1}    //  ako je index veci od x.length  index se postavlja na nulu
		x[Index-1].style.display = "block";  // i stavlja je da ona bude vidljiva zbog display.block.
		setTimeout(slike, 2000); // vreme za koje ce se slike menjati u ovom slucaju to je 2s
	}j