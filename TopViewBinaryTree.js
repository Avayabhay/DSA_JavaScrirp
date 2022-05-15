topView(root);
{
  //your code here
  var ans = [];
  const map = new Map();
  let q = [];
  root.hDis = 0;

  const solve = (root) => {
    q.push(root);

    while (q.length !== 0) {
      var curr = q.shift();
      if (!map.has(curr.hDis)) {
        map.set(curr.hDis, curr.data);
      }

      if (curr.left) {
        curr.left.hDis = curr.hDis - 1;
        //solve(curr.left);
        q.push(curr.left);
      }
      if (curr.right) {
        curr.right.hDis = curr.hDis + 1;
        solve(curr.right);
        q.push(curr.right);
      }
      //console.log(map)
    }
  };

  solve(root);
  var arr = Array.from(map);
  //console.log(arr)
  arr.sort((a, b) => a[0] - b[0]);
  //console.log(arr.values())
  for (let [key, value] of arr.values()) {
    //console.log(value)
    ans.push(value);
  }
  //console.log(ans)
  return ans;
}
