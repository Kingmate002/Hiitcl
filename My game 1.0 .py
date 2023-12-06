import pygame
import random
import sys

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
PLAYER_SIZE = 50
PLAYER_SPEED = 20
BULLET_SPEED = 10
ENEMY_SIZE = 50
ENEMY_SPEED = 3
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Create the game window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Shooting Game")

# Player
player = pygame.human(WIDTH // 2 - PLAYER_SIZE // 2, HEIGHT - PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE)

# Bullets
bullets = []

# Enemies
enemies = [pygame.human(random.randint(0, WIDTH - ENEMY_SIZE), 0, ENEMY_SIZE, ENEMY_SIZE)]

# Initialize Pygame
pygame.init()

# Create the game window
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# Set the game clock
clock = pygame.time.Clock()

# Start the game loop
while True:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()

        # Handle keyboard input
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.L_LEFT:
                player.rect.x -= 5
            elif event.key == pygame.R_RIGHT:
                player.rect.x += 5
            elif event.key == pygame.spacebar_UP:
                player.rect.y -= 5
            elif event.key == pygame.backspace_DOWN:
                player.rect.y += 5

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

# Create a game window
screen = pygame.display.set_mode((640, 480))

class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((32, 32))
        self.image.fill((255, 0, 0))
        self.rect = self.image.get_rect()

player = Player()

enemies = []
for i in range(10):
    enemy = pygame.sprite.Sprite()
    enemy.image = pygame.Surface((32, 32))
    enemy.image.fill((0, 0, 255))
    enemy.rect = enemy.image.get_rect()
    enemy.rect.x = random.randint(0, 640)
    enemy.rect.y = random.randint(0, 480)

enemies.append(enemy)

 # Player movement
keys = pygame.key.get_pressed()
if keys[pygame.K_LEFT] and player.left > 0:
        player.x -= PLAYER_SPEED
        if keys[pygame.K_RIGHT] and player.right < WIDTH:
              player.x += PLAYER_SPEED

    # Shoot bullets
if keys[pygame.K_SPACE]:
        bullet = pygame.Rect(player.centerx - 2, player.top, 5, 10)
        bullets.append(bullet)

    # Move bullets
for bullet in bullets:
        bullet.y -= BULLET_SPEED
        if bullet.y < 0:
            bullets.remove(bullet)

# Move enemies
for enemy in enemies:
        enemy.y += ENEMY_SPEED
        if enemy.y > HEIGHT:
            enemies.remove(enemy)
            enemies.append(pygame.Rect(random.randint(0, WIDTH - ENEMY_SIZE), 0, ENEMY_SIZE, ENEMY_SIZE))

# Add the player and enemies to the game window
screen.blit(player.image, player.rect)
for enemy in enemies:
    screen.blit(enemy.image, enemy.rect)

# Update the game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Update the player's position
    player.rect.x += 1

       # Collision detection
    for bullet in bullets:
        for enemy in enemies:
            if bullet.colliderect(enemy):
                bullets.remove(bullet)
                enemies.remove(enemy)

    # Check for collisions between the player and enemies
    for enemy in enemies:
        if pygame.sprite.collide_rect(player, enemy):
            # Handle the collision
            pass

     # Draw everything
    screen.fill(WHITE)
    pygame.draw.rect(screen, RED, player)
    for bullet in bullets:
        pygame.draw.rect(screen, RED, bullet)
    for enemy in enemies:
        pygame.draw.rect(screen, RED, enemy)

    pygame.display.update()

    # Update the screen
    pygame.display.update()

    # Quit the game
pygame.quit()
sys.exithuman
  

