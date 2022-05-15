leftView(root);
{
  //your code here
  var leftView = [];
  const solve = (root, leftView, level) => {
    if (root === null) {
      return;
    }

    if (leftView.length <= level) {
      leftView.push(root.data);
    }

    solve(root.left, leftView, level + 1);
    solve(root.right, leftView, level + 1);
  };

  solve(root, leftView, 0);

  return leftView;
}
