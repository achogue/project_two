const newFormHandler = async (event) => {
  event.preventDefault();

  const workout_id = document.querySelector('#workout-id').value.trim();
  const upperWorkoutType = document.querySelector('#upper-workout-type').value;
  const lowerWorkoutType = document.querySelector('#lower-workout-type').value;
  const description = document.querySelector('#workout-desc').value.trim();
  

  if (workout_id && upperWorkoutType && lowerWorkoutType && description) {
    const response = await fetch(`/api/workouts`, {
      method: 'POST',
      body: JSON.stringify({ workout_id, upperWorkoutType, lowerWorkoutType, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create workout');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete workout');
    }
  }
};

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.workout-list')
  .addEventListener('click', delButtonHandler);
