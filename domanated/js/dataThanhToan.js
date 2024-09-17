

const thanhtoanBtn = document.getElementById('checkout');
$(document).ready(function(){
    let number = JSON.parse(localStorage.getItem("ThanhToan"))
    function dangNhap(){
        let user = document.getElementById("số điện thoại người nhận").value
        if(số điện thoại người nhận == ""){
            document.getElementById("số điện thoại người nhận").innerHTML = "Số điện thoại không được để trống!";
            document.getElementById("số điện thoại người nhận").focus()
            return false;
        }
        document.getElementById("số điện thoại người nhận").innerHTML =  "";
        let diachi = document.getElementById("địa chỉ giao hàng").value
        if( địa chỉ giao hàng ) == ""){
            document.getElementById("địa chỉ giao hàng").innerHTML = "địa chỉ giao hàng không được để trống!";
            document.getElementById("địa chỉ giao hàng ").focus();
            return false;
        }
        
    }

    $("#loginForm").submit((P) => P.preventDefault());
	$("#button_dangnhap").click(function(){
        let flag;
        if(!ThanhToan()){
            return false;
        }
        let user = $("#số điện thoại người nhận").val()
        let diachi = $("#địa chỉ giao hàng").val()
        let user = accounts.find(x => x.tk == số điện thoại người nhận)
        if(user != null && user.diachi == địa chỉ nhận ){
            window.alert("thanh toán giỏ hàng thành công")
            flag = true;
            window.location.href = "../html/Home.html";
        } else{
            window.alert("vui lòng nhập đủ các bước")
            document.getElementById("số điện thoại người nhận").focus();
            flag = false;
        }
        localStorage.setItem("flag",flag);
        
        return true;
    })
});

