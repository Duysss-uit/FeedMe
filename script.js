const copyButton = document.getElementById("copy-account");
const accountNumber = document.getElementById("account-number");

if (copyButton && accountNumber) {
  copyButton.addEventListener("click", async () => {
    const originalText = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(accountNumber.textContent.trim());
      copyButton.textContent = "Da sao chep";
    } catch (error) {
      copyButton.textContent = "Khong the sao chep";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1600);
  });
}
