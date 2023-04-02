
alert('Hello TEJ!')
			function calculateTotal() {
				// Retrieve input values
				var price1 = Number(document.getElementById("Price1").value);
				var item1 = Number(document.getElementById("Quantity1").value);
				var price2 = Number(document.getElementById("Price2").value);
				var item2 = Number(document.getElementById("Quantity2").value);


				// Calculate total price
				var total11 = (item1 * price1)
				
				// Display total price
				document.getElementById("total1").textContent  = total11.toFixed(2);


				// Calculate total price
				var total22 =(item2 * price2);
				
				// Display total price
				document.getElementById("total2").textContent = total22.toFixed(2);
				
				// Calculate total price
				var total = (item1 * price1) + (item2 * price2);
				
				// Display total price
				document.getElementById("total12").textContent = total.toFixed(2);


				// Calculate total price
			var vat = total * 0.13; // Calculate VAT
			var tip = total * 0.1; // Calculate tip
			
			// Calculate grand total
			var grandTotal = total + vat + tip;
			
			// Display total price, VAT, tip, and grand total
			
			document.getElementById("Vat").value = vat.toFixed(2);
			document.getElementById("Tip").value = tip.toFixed(2);
			document.getElementById("Grand_total").textContent = grandTotal.toFixed(2);
			}



