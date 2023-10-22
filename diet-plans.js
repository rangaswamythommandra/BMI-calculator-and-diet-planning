const mealPlans = document.querySelectorAll('.meal-plan');
mealPlans.forEach((plan) => {
    plan.addEventListener('mouseover', () => {
        plan.style.transform = 'scale(1.02)';
    });

    plan.addEventListener('mouseout', () => {
        plan.style.transform = 'scale(1)';
    });
});
