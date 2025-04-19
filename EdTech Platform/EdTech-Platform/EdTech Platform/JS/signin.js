/* script.js */
document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (!email || !password || !role) {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Signing in with:", { email, password, role });
    // Perform further login logic here (e.g., backend API call)
    alert("Sign in successful (mockup)");
});