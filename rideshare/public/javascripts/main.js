function toggleReturnBox(btn) {
  let box1 = _("return-box");
  console.log(this.checked);
  if (btn == "rider") {
    box1.style.opacity = 1;
  }
  if (btn == "driver) {
    box1.style.opacity = 0;
  }
}
