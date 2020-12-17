
const bookList = document.getElementById('booklist');

let arBooks =[];

const loadBooks = () =>{
	try{
		arBooks = (Tsignebi);
		console.log(Tsignebi)
		displayBooks(arBooks);
	} catch(err){
		console.error(err);
	}
};


const displayBooks = (books) =>{
	const htmlString = books
		.map((Tsigni)=>{
			console.log(Tsigni)
			return `
			    <tr class="tsigni">+
					<td align='right'> + (i + 1) +.</td> +
					<td class='classname'> + Tsignebi[i].dasaxeleba +"</td> +
					<td> + Tsignebi[i].avtori + </td> +
					<td> + Tsignebi[i].weli + </td> +
					<td> + Tsignebi[i].Janri + </td> +
					<td> + Tsignebi[i].gamomcemloba + </td> +
					<td> + Tsignebi[i].fasi + </td> +
				</tr>
				   `;
		})
		.join('');
		bookList.innerHTML= htmlString;
}

loadBooks();

function add_book()
	     {
			document.getElementById("note").innerHTML = "";
			if(document.getElementById("dasaxeleba").value.length == 0)
			  {
			    document.getElementById("note").innerHTML = "გთხოვთ შეავსოთ დასახელების ველი";
			  }
			else
			if(document.getElementById("avotor").value.length == 0)
			  {
			    document.getElementById("note").innerHTML = "გთხოვთ შეავსოთ ავტორის ველი";
			  }
			else
			if(document.getElementById("Janri").selectedIndex == 0)
			  {
			    document.getElementById("note").innerHTML = "გთხოვთ აირჩიოთ ჟანრი";
			  }
  
		 }


 function search_book()
		    {
			  f_dasaxeleba = document.getElementById("F_dasaxeleba").value;

			  var ssv= document.getElementById("F_Janri");
			  f_janri = ssv.options[ssv.selectedIndex].value;


			  f_avtori = document.getElementById("F_avtori").value;

			  f_weli = document.getElementById("F_weli").value;

			  f_gamomcemloba = document.getElementById("F_gamomcemloba").value;

			  f_fasi = document.getElementById("F_fasi").value;
			}


			  /*for( var i = 0; i < h; i++)
			    {
				  if( f_dasaxeleba == saxeleba)
					{  alert([i].dasaxeleba + ", " + [i].avtori);
				   }
				  else if(f_janri == nri){
		  alert([i].dasaxeleba + ", " + [i].avtori);
				   }
				  else if(f_avtori == tori){
		  alert([i].dasaxeleba + ", " + [i].avtori);
				   }
				  else if(f_weli == li && f_weli !=""){ 	  alert([i].dasaxeleba + ", " + [i].avtori);
				  }
				  else if(f_gamomcemloba == momcemloba){ 	  alert([i].dasaxeleba + ", " + [i].avtori);
				  }
				  else if(f_fasi == si){
				  	  for(var j = 0; j < h; j++){ 	  alert([i].dasaxeleba + ", " + [i].avtori);}
				  }
				}*/
			